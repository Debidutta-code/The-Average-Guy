const Lead = require('../models/Lead');
const { calculateScore } = require('../services/scoringService');
const { sendColdEmail } = require('../services/emailService');

const getLeads = async (req, res) => {
  try {
    const { city, specialty, scoreBadge, status, hasPhone, search, page = 1, limit = 20 } = req.query;
    let query = {};
    if (city) query.city = city;
    if (specialty) query.specialty = specialty;
    if (scoreBadge) query.scoreBadge = scoreBadge;
    if (status) query.status = status;
    if (hasPhone !== '' && hasPhone !== undefined) query.hasPhone = hasPhone === 'true';

    if (search) {
      query.$or = [
        { doctorName: { $regex: search, $options: 'i' } },
        { clinicName: { $regex: search, $options: 'i' } },
        { city: { $regex: search, $options: 'i' } }
      ];
    }

    const skip = (page - 1) * limit;
    const leads = await Lead.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Lead.countDocuments(query);

    res.json({
      leads,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit)
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createLead = async (req, res) => {
  try {
    const leadData = req.body;
    const { score, badge } = calculateScore(leadData);
    const lead = new Lead({
        ...leadData,
        score,
        scoreBadge: badge,
        activityTimeline: [{ action: 'Lead Created', details: 'Manual entry' }]
    });
    await lead.save();
    res.status(201).json(lead);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });

    const oldStatus = lead.status;
    const oldFollowUp = lead.followUpDate;

    Object.assign(lead, req.body);

    // Log status change
    if (req.body.status && req.body.status !== oldStatus) {
        lead.activityTimeline.push({
            action: 'Status Changed',
            details: `From ${oldStatus} to ${req.body.status}`
        });
    }

    // Log follow-up change
    if (req.body.followUpDate && req.body.followUpDate !== oldFollowUp) {
        lead.activityTimeline.push({
            action: 'Follow-up Scheduled',
            details: `Scheduled for ${req.body.followUpDate}`
        });
    }

    const { score, badge } = calculateScore(lead);
    lead.score = score;
    lead.scoreBadge = badge;

    await lead.save();
    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateField = async (req, res) => {
    try {
        const { id } = req.params;
        const { field, value } = req.body;
        const lead = await Lead.findById(id);
        if (!lead) return res.status(404).json({ message: 'Lead not found' });

        const oldValue = lead[field];
        lead[field] = value;

        lead.activityTimeline.push({
            action: 'Field Updated',
            details: `${field} changed from "${oldValue}" to "${value}"`
        });

        // Recalculate score if relevant fields changed
        if (['rating', 'reviewCount', 'mobileNumber'].includes(field)) {
            const { score, badge } = calculateScore(lead);
            lead.score = score;
            lead.scoreBadge = badge;
        }

        await lead.save();
        res.json(lead);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteLead = async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: 'Lead deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getStats = async (req, res) => {
  try {
    const totalLeads = await Lead.countDocuments();
    const hotLeads = await Lead.countDocuments({ scoreBadge: 'Hot' });
    const warmLeads = await Lead.countDocuments({ scoreBadge: 'Warm' });
    const coldLeads = await Lead.countDocuments({ scoreBadge: 'Cold' });

    const statusCounts = await Lead.aggregate([
        { $group: { _id: "$status", count: { $sum: 1 } } }
    ]);

    res.json({ totalLeads, hotLeads, warmLeads, coldLeads, statusCounts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const sendEmailToLead = async (req, res) => {
    try {
      const { id } = req.params;
      const { subject, text, html } = req.body;
      const lead = await Lead.findById(id);
      if (!lead) return res.status(404).json({ message: 'Lead not found' });
      if (!lead.email) return res.status(400).json({ message: 'Lead has no email address' });

      await sendColdEmail(lead.email, subject, text, html);

      lead.emailsSent.push({ subject });
      lead.activityTimeline.push({
        action: 'Email Sent',
        details: `Subject: ${subject}`
      });
      lead.lastContactedAt = new Date();
      if (lead.status === 'New') lead.status = 'Contacted';
      await lead.save();

      res.json({ message: 'Email sent successfully', lead });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports = { getLeads, createLead, updateLead, getLeadById, deleteLead, getStats, sendEmailToLead, updateField };

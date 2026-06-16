import { Response } from 'express';
import Lead from '../models/Lead.js';
import { AuthRequest } from '../middleware/authMiddleware.js';

// @desc    Get all leads with search, filter, and sort
// @route   GET /api/leads
// @access  Private
export const getLeads = async (req: AuthRequest, res: Response) => {
  try {
    const { search, status, priority, sortBy, order } = req.query;

    let query: any = { user: req.user._id };

    // Filtering
    if (status) {
      query.status = status;
    }
    if (priority) {
      query.priority = priority;
    }

    // Search
    if (search) {
      query.$or = [
        { clinicName: { $regex: search, $options: 'i' } },
        { phoneNumber: { $regex: search, $options: 'i' } },
        { city: { $regex: search, $options: 'i' } },
        { contactPerson: { $regex: search, $options: 'i' } },
      ];
    }

    // Sorting
    let sortOptions: any = {};
    const sortField = (sortBy as string) || 'createdAt';
    const sortOrder = (order as string) === 'asc' ? 1 : -1;
    sortOptions[sortField] = sortOrder;

    const leads = await Lead.find(query).sort(sortOptions);
    res.json(leads);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single lead
// @route   GET /api/leads/:id
// @access  Private
export const getLeadById = async (req: AuthRequest, res: Response) => {
  try {
    const lead = await Lead.findOne({ _id: req.params.id, user: req.user._id });

    if (lead) {
      res.json(lead);
    } else {
      res.status(404).json({ message: 'Lead not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a lead
// @route   POST /api/leads
// @access  Private
export const createLead = async (req: AuthRequest, res: Response) => {
  const { clinicName, contactPerson, phoneNumber, googleMapLink, website, city, priority } = req.body;

  try {
    const lead = new Lead({
      user: req.user._id,
      clinicName,
      contactPerson,
      phoneNumber,
      googleMapLink,
      website,
      city,
      priority,
    });

    const createdLead = await lead.save();
    res.status(201).json(createdLead);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a lead
// @route   PUT /api/leads/:id
// @access  Private
export const updateLead = async (req: AuthRequest, res: Response) => {
  try {
    const lead = await Lead.findOne({ _id: req.params.id, user: req.user._id });

    if (lead) {
      lead.clinicName = req.body.clinicName || lead.clinicName;
      lead.contactPerson = req.body.contactPerson || lead.contactPerson;
      lead.phoneNumber = req.body.phoneNumber || lead.phoneNumber;
      lead.googleMapLink = req.body.googleMapLink || lead.googleMapLink;
      lead.website = req.body.website || lead.website;
      lead.city = req.body.city || lead.city;
      lead.status = req.body.status || lead.status;
      lead.nextFollowUpDateTime = req.body.nextFollowUpDateTime || lead.nextFollowUpDateTime;
      lead.priority = req.body.priority || lead.priority;

      if (req.body.newNote) {
          lead.notes.unshift({
              date: new Date(),
              text: req.body.newNote
          });
      }

      if (req.body.updateCallHistory) {
          lead.callHistory.unshift({
              date: new Date(),
              status: lead.status,
              notes: req.body.newNote || ''
          });
          lead.totalCalls += 1;
      }

      const updatedLead = await lead.save();
      res.json(updatedLead);
    } else {
      res.status(404).json({ message: 'Lead not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a lead
// @route   DELETE /api/leads/:id
// @access  Private
export const deleteLead = async (req: AuthRequest, res: Response) => {
  try {
    const lead = await Lead.findOne({ _id: req.params.id, user: req.user._id });

    if (lead) {
      await lead.deleteOne();
      res.json({ message: 'Lead removed' });
    } else {
      res.status(404).json({ message: 'Lead not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get today's and overdue follow-ups
// @route   GET /api/leads/follow-ups/today
// @access  Private
export const getTodayFollowUps = async (req: AuthRequest, res: Response) => {
    try {
        const today = new Date();
        today.setHours(23, 59, 59, 999);

        const leads = await Lead.find({
            user: req.user._id,
            nextFollowUpDateTime: { $lte: today },
            status: { $nin: ['Not Interested', 'Client Won', 'Dead Lead'] }
        }).sort({ nextFollowUpDateTime: 1 });

        res.json(leads);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

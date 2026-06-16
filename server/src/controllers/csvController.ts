import { Response } from 'express';
import Lead from '../models/Lead.js';
import { AuthRequest } from '../middleware/authMiddleware.js';

// @desc    Export leads to CSV
// @route   GET /api/csv/export
// @access  Private
export const exportLeads = async (req: AuthRequest, res: Response) => {
  try {
    const leads = await Lead.find({ user: req.user._id });

    let csv = 'Clinic Name,Contact Person,Phone Number,City,Status,Priority,Website,Google Map Link\n';

    leads.forEach(lead => {
      csv += `"${lead.clinicName}","${lead.contactPerson}","${lead.phoneNumber}","${lead.city}","${lead.status}","${lead.priority}","${lead.website || ''}","${lead.googleMapLink || ''}"\n`;
    });

    res.header('Content-Type', 'text/csv');
    res.attachment('leads.csv');
    return res.send(csv);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Import leads from CSV
// @route   POST /api/csv/import
// @access  Private
export const importLeads = async (req: AuthRequest, res: Response) => {
  const { csvData } = req.body;

  if (!csvData) {
    return res.status(400).json({ message: 'No CSV data provided' });
  }

  try {
    const lines = csvData.trim().split('\n');
    const leadsToCreate = [];

    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;

      const values = [];
      let current = '';
      let inQuotes = false;

      for (let char of lines[i]) {
          if (char === '"') inQuotes = !inQuotes;
          else if (char === ',' && !inQuotes) {
              values.push(current.trim());
              current = '';
          } else current += char;
      }
      values.push(current.trim());

      leadsToCreate.push({
        user: req.user._id,
        clinicName: values[0],
        contactPerson: values[1],
        phoneNumber: values[2],
        city: values[3],
        status: values[4] || 'New Lead',
        priority: values[5] || 'Medium',
        website: values[6] || '',
        googleMapLink: values[7] || ''
      });
    }

    if (leadsToCreate.length > 0) await Lead.insertMany(leadsToCreate);
    res.status(201).json({ message: `${leadsToCreate.length} leads imported successfully` });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Backup all data as JSON
// @route   GET /api/csv/backup
// @access  Private
export const backupData = async (req: AuthRequest, res: Response) => {
    try {
        const leads = await Lead.find({ user: req.user._id });
        res.header('Content-Type', 'application/json');
        res.attachment(`backup-${new Date().toISOString().split('T')[0]}.json`);
        res.send(JSON.stringify(leads, null, 2));
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

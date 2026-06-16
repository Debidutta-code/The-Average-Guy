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

  console.log(`[CSV Import] Request received from user: ${req.user._id}`);

  if (!csvData) {
    console.log('[CSV Import] Error: No CSV data provided');
    return res.status(400).json({ message: 'No CSV data provided' });
  }

  try {
    // Handle both Windows (\r\n) and Unix (\n) line endings
    const lines = csvData.replace(/\r\n/g, '\n').trim().split('\n');
    console.log(`[CSV Import] Total lines found: ${lines.length}`);

    const leadsToCreate = [];

    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;

      // Improved CSV parser to handle quoted strings with commas and empty fields
      const values = [];
      let current = '';
      let inQuotes = false;

      const line = lines[i];
      for (let j = 0; j < line.length; j++) {
          const char = line[j];
          if (char === '"') {
              inQuotes = !inQuotes;
          } else if (char === ',' && !inQuotes) {
              values.push(current.trim());
              current = '';
          } else {
              current += char;
          }
      }
      values.push(current.trim());

      console.log(`[CSV Import] Line ${i} parsed values:`, values);

      if (values.length < 4) {
          console.log(`[CSV Import] Warning: Line ${i} has insufficient fields.`);
          continue;
      }

      leadsToCreate.push({
        user: req.user._id,
        clinicName: values[0] || 'Unknown Clinic',
        contactPerson: values[1] || 'Unknown Person',
        phoneNumber: values[2] || 'No Phone',
        city: values[3] || 'Unknown City',
        status: values[4] || 'New Lead',
        priority: (values[5] || 'Medium') as 'High' | 'Medium' | 'Low',
        website: values[6] || '',
        googleMapLink: values[7] || ''
      });
    }

    console.log(`[CSV Import] Attempting to insert ${leadsToCreate.length} leads`);

    if (leadsToCreate.length > 0) {
        await Lead.insertMany(leadsToCreate);
    }

    console.log(`[CSV Import] Successfully imported ${leadsToCreate.length} leads`);
    res.status(201).json({ message: `${leadsToCreate.length} leads imported successfully` });
  } catch (error: any) {
    console.error('[CSV Import] Critical Error:', error.message);
    res.status(500).json({ message: error.message });
  }
};

// @desc    Download empty CSV template
// @route   GET /api/csv/template
// @access  Private
export const exportTemplate = async (req: AuthRequest, res: Response) => {
    const csv = 'Clinic Name,Contact Person,Phone Number,City,Status,Priority,Website,Google Map Link\n';
    res.header('Content-Type', 'text/csv');
    res.attachment('lead-template.csv');
    return res.send(csv);
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

const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');
const leadUploadController = require('../controllers/leadUploadController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const jwt = require('jsonwebtoken');

// Middleware to verify JWT
const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

router.get('/', auth, leadController.getLeads);
router.get('/stats', auth, leadController.getStats);
router.post('/', auth, leadController.createLead);
router.get('/:id', auth, leadController.getLeadById);
router.put('/:id', auth, leadController.updateLead);
router.delete('/:id', auth, leadController.deleteLead);
router.post('/:id/email', auth, leadController.sendEmailToLead);
router.post('/import', auth, upload.single('file'), leadController.importLeadsCSV);
router.post('/upload-xlsx', auth, upload.single('file'), leadUploadController.uploadXLSX);

module.exports = router;

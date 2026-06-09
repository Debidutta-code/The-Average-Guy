const express = require('express');
const router = express.Router();
const { triggerAppointment } = require('../controllers/appointment.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/trigger-appointment', authMiddleware, triggerAppointment);

module.exports = router;

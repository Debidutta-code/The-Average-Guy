const config = require('../config/env');

const authMiddleware = (req, res, next) => {
  const { apiSecret } = req.body;

  if (!apiSecret || apiSecret !== config.clinicSecret) {
    return res.status(403).json({
      success: false,
      message: 'Unauthorized: Invalid API secret'
    });
  }

  next();
};

module.exports = authMiddleware;

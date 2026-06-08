const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = (req, res, next) => {
  const { apiSecret } = req.body;

  if (!apiSecret || apiSecret !== process.env.CLINIC_SECRET) {
    return res.status(403).json({
      success: false,
      message: 'Unauthorized: Invalid API secret'
    });
  }

  next();
};

module.exports = authMiddleware;

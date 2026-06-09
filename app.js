const express = require('express');
const cors = require('cors');
const config = require('./src/config/env');
const connectDB = require('./src/config/db');
const appointmentRoutes = require('./src/routes/appointment.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', appointmentRoutes);

app.get('/', (req, res) => {
  res.send('Clinic Appointment Automation API is running...');
});

const PORT = config.port;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

if (require.main === module) {
  startServer();
}

module.exports = app;

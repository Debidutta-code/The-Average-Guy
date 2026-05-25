import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet({
  crossOriginResourcePolicy: false,
}));
app.use(morgan('dev'));

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

import authRoutes from './routes/authRoutes';
import apiRoutes from './routes/apiRoutes';
import uploadRoutes from './routes/uploadRoutes';

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api', apiRoutes);

export default app;

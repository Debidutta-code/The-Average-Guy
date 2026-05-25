import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';
import { config } from '../config';

const generateToken = (id: any) => {
  return jwt.sign({ id }, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRE as any,
  });
};

export const registerAdmin = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const adminExists = await Admin.findOne({ $or: [{ email }, { username }] });

    if (adminExists) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const admin = await Admin.create({
      username,
      email,
      password,
    });

    if (admin) {
      res.status(201).json({
        _id: admin._id,
        username: admin.username,
        email: admin.email,
        token: generateToken(admin._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid admin data' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const loginAdmin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (admin && (await admin.comparePassword(password))) {
      res.json({
        _id: admin._id,
        username: admin.username,
        email: admin.email,
        token: generateToken(admin._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAdminProfile = async (req: any, res: Response) => {
  try {
    const admin = await Admin.findById(req.admin._id);

    if (admin) {
      res.json({
        _id: admin._id,
        username: admin.username,
        email: admin.email,
      });
    } else {
      res.status(404).json({ message: 'Admin not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

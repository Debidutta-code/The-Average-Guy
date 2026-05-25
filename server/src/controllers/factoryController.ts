import { Request, Response } from 'express';
import { Model } from 'mongoose';

export const getAll = (model: Model<any>) => async (req: Request, res: Response) => {
  try {
    const documents = await model.find().sort({ createdAt: -1 });
    res.status(200).json(documents);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getOne = (model: Model<any>) => async (req: Request, res: Response) => {
  try {
    const document = await model.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.status(200).json(document);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createOne = (model: Model<any>) => async (req: Request, res: Response) => {
  try {
    const document = await model.create(req.body);
    res.status(201).json(document);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateOne = (model: Model<any>) => async (req: Request, res: Response) => {
  try {
    const document = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.status(200).json(document);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteOne = (model: Model<any>) => async (req: Request, res: Response) => {
  try {
    const document = await model.findByIdAndDelete(req.params.id);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.status(200).json({ message: 'Document deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

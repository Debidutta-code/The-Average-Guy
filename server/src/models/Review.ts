import mongoose, { Schema, Document } from 'mongoose';

export interface IReview extends Document {
  name: string;
  rating: number;
  comment: string;
  image?: string;
  isFeatured: boolean;
  status: 'pending' | 'approved' | 'rejected';
}

const ReviewSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    image: { type: String },
    isFeatured: { type: Boolean, default: false },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  },
  { timestamps: true }
);

export default mongoose.model<IReview>('Review', ReviewSchema);

import mongoose, { Schema, Document } from 'mongoose';

export interface IMenuItem extends Document {
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isVeg: boolean;
  isPopular: boolean;
  status: 'available' | 'unavailable';
}

const MenuItemSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    isVeg: { type: Boolean, default: true },
    isPopular: { type: Boolean, default: false },
    status: { type: String, enum: ['available', 'unavailable'], default: 'available' },
  },
  { timestamps: true }
);

export default mongoose.model<IMenuItem>('MenuItem', MenuItemSchema);

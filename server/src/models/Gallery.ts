import mongoose, { Schema, Document } from 'mongoose';

export interface IGallery extends Document {
  title: string;
  imageUrl: string;
  category: 'interior' | 'events' | 'food' | 'community';
  isFeatured: boolean;
}

const GallerySchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: {
      type: String,
      enum: ['interior', 'events', 'food', 'community'],
      required: true,
    },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IGallery>('Gallery', GallerySchema);

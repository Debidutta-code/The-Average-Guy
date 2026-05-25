import mongoose, { Schema, Document } from 'mongoose';

export interface IBusinessDetails extends Document {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  openingHours: string;
  googleRating: string;
  totalReviews: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    googleMaps?: string;
    whatsapp?: string;
    bookMyShow?: string;
  };
  amenities: string[];
}

const BusinessDetailsSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    tagline: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    openingHours: { type: String, required: true },
    googleRating: { type: String },
    totalReviews: { type: String },
    socialLinks: {
      instagram: { type: String },
      facebook: { type: String },
      googleMaps: { type: String },
      whatsapp: { type: String },
      bookMyShow: { type: String },
    },
    amenities: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model<IBusinessDetails>('BusinessDetails', BusinessDetailsSchema);

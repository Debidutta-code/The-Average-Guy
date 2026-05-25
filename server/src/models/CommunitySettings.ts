import mongoose, { Schema, Document } from 'mongoose';

export interface ICommunitySettings extends Document {
  title: string;
  description: string;
  whatsappLink: string;
  buttonText: string;
  bannerImage?: string;
  enabled: boolean;
  autoPopup: boolean;
  popupDelay: number; // in milliseconds
  createdAt: Date;
  updatedAt: Date;
}

const CommunitySettingsSchema: Schema = new Schema(
  {
    title: { type: String, required: true, default: 'Join Our Community' },
    description: { type: String, required: true, default: 'Get event updates, music nights, cafe meetups, and exclusive announcements.' },
    whatsappLink: { type: String, required: true, default: '#' },
    buttonText: { type: String, required: true, default: 'Join WhatsApp Community' },
    bannerImage: { type: String },
    enabled: { type: Boolean, default: true },
    autoPopup: { type: Boolean, default: true },
    popupDelay: { type: Number, default: 5000 },
  },
  { timestamps: true }
);

export default mongoose.model<ICommunitySettings>('CommunitySettings', CommunitySettingsSchema);

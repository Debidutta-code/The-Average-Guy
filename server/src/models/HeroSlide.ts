import mongoose, { Schema, Document } from 'mongoose';

export interface IHeroSlide extends Document {
  title: string;
  subtitle: string;
  image: string;
  video?: string;
  ctaText: string;
  ctaLink: string;
  order: number;
  isActive: boolean;
}

const HeroSlideSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    image: { type: String, required: true },
    video: { type: String },
    ctaText: { type: String, default: 'Explore' },
    ctaLink: { type: String, default: '/' },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model<IHeroSlide>('HeroSlide', HeroSlideSchema);

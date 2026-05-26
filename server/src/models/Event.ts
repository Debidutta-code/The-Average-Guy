import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  coverImage: string;
  artist: string;
  tags: string[];
  bookMyShowLink?: string;
  status: 'upcoming' | 'past' | 'cancelled';
  gallery: string[];
}

const EventSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    location: { type: String, default: 'The Monarch Mug, Bhubaneswar' },
    coverImage: { type: String, required: true },
    artist: { type: String, required: true },
    tags: [{ type: String }],
    bookMyShowLink: { type: String },
    status: { type: String, enum: ['upcoming', 'past', 'cancelled'], default: 'upcoming' },
    gallery: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model<IEvent>('Event', EventSchema);

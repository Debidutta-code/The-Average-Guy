import mongoose, { Document, Schema } from 'mongoose';

export interface ICallHistory {
  date: Date;
  status: string;
  notes: string;
}

export interface INote {
  date: Date;
  text: string;
}

export interface ILead extends Document {
  user: mongoose.Types.ObjectId;
  clinicName: string;
  contactPerson: string;
  phoneNumber: string;
  googleMapLink?: string;
  website?: string;
  city: string;
  status: string;
  nextFollowUpDateTime?: Date;
  totalCalls: number;
  priority: 'High' | 'Medium' | 'Low';
  notes: INote[];
  callHistory: ICallHistory[];
  createdAt: Date;
  updatedAt: Date;
}

const callHistorySchema = new Schema<ICallHistory>({
  date: { type: Date, default: Date.now },
  status: { type: String, required: true },
  notes: { type: String },
});

const noteSchema = new Schema<INote>({
  date: { type: Date, default: Date.now },
  text: { type: String, required: true },
});

const leadSchema = new Schema<ILead>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    clinicName: {
      type: String,
      required: [true, 'Clinic name is required'],
      trim: true,
    },
    contactPerson: {
      type: String,
      required: [true, 'Contact person is required'],
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    googleMapLink: {
      type: String,
      trim: true,
    },
    website: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
    },
    status: {
      type: String,
      default: 'New Lead',
    },
    nextFollowUpDateTime: {
      type: Date,
    },
    totalCalls: {
      type: Number,
      default: 0,
    },
    priority: {
      type: String,
      enum: ['High', 'Medium', 'Low'],
      default: 'Medium',
    },
    notes: [noteSchema],
    callHistory: [callHistorySchema],
  },
  {
    timestamps: true,
  }
);

// Index for search
leadSchema.index({ clinicName: 'text', phoneNumber: 'text', city: 'text' });

const Lead = mongoose.model<ILead>('Lead', leadSchema);

export default Lead;

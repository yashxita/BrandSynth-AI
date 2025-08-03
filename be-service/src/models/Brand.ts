import { model, Model, Schema, Types } from 'mongoose';
import type { IBrand } from '../interfaces';

export interface IBrandDocument extends IBrand, Document {}

const brandSchema = new Schema<IBrandDocument>({
  name: { type: String, required: true },
  primaryColors: [String],
  typography: {
    heading: String,
    body: String,
  },
  logoUrl: String,
  imageStyle: String,
  toneOfVoice: String,
  settings: {
    calendar: Object,
    frequency: String,
  },
  users: [{ type: Types.ObjectId, ref: 'User' }],
});

export default model<IBrandDocument>('Brand', brandSchema);

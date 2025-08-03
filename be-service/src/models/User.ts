import { Schema, model, Types, Document } from 'mongoose';
import { type IUser } from '../interfaces';

const userSchema = new Schema<IUserDocument>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  brand: { type: Types.ObjectId, ref: 'Brand' },
  role: { type: String, enum: ['admin', 'editor'], default: 'editor' },
});


export type IUserDocument = IUser & Document;
export default model<IUserDocument>('User', userSchema);
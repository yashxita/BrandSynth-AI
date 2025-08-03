import { Types } from 'mongoose';

export interface IBrand {
  _id?: Types.ObjectId | string;
  name: string;
  primaryColors?: string[];
  typography?: {
    heading?: string;
    body?: string;
  };
  logoUrl?: string;
  imageStyle?: string;
  toneOfVoice?: string;
  settings?: {
    calendar?: any;
    frequency?: string;
    // ...other agent settings
  };
  users?: (Types.ObjectId | string)[];
}

export interface IUser {
  _id?: Types.ObjectId | string;
  email: string;
  password: string;
  brand: Types.ObjectId | string | IBrand | undefined;
  role: 'admin' | 'editor';
}

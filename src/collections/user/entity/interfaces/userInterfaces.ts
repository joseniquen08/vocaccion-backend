import { Types } from "mongoose";

export interface IUser {
  _id: Types.ObjectId;
  username: string;
  first_name: string;
  last_name: string;
  age: number;
  email: string;
  password: string;
  role: number;
  created_at: Date;
  updated_at: Date;
}
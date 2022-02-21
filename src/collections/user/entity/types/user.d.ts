import { Types } from 'mongoose';
import { IUser } from "../interfaces/userInterfaces";

export type UserIdType = { _id: Types.ObjectId };
export type signUpUser = Omit<IUser, '_id' | 'created_at' | 'updated_at'>;
export type signInUser = Omit<IUser, '_id' | 'username' | 'first_name' | 'last_name' | 'age' | 'role' | 'created_at' | 'updated_at'>;
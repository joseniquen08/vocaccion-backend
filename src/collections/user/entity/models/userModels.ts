import mongoose from "mongoose";
import { IUser } from "../interfaces/userInterfaces";
import { UserSchema } from '../schemas/userSchemas';

export const UserModel = mongoose.model<IUser>('User', UserSchema);
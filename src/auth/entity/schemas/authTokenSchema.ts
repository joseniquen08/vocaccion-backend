import mongoose from "mongoose";
import { IToken } from "../interfaces/authInterfaces";

const Schema = mongoose.Schema;

export const AuthTokenSchema = new Schema<IToken>({
  token: {
    type: String,
    required: [true, 'Token is required'],
  },
  expire_at: {
    type: Date,
    default: new Date(),
    index: {
      expires: 86400,
    },
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required'],
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});
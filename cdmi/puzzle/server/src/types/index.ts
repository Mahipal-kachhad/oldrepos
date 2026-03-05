import { Request } from "express";
import { Document, Types } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role?: 'admin' | 'user';
}

export interface IUserDocument extends IUser, Document {
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  _id: Types.ObjectId;
  role: 'admin' | 'user';
}

export interface RegisterRequest extends Request {
  body: IUser;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface validateRequest {
  body: {
    email: string;
    password: string;
  };
}

import { Response } from "express";
import { ApiResponse, IUser, RegisterRequest, validateRequest } from "../types";
import userModel from "../models/userModel";

export const registerUser = async (
  req: RegisterRequest,
  res: Response<ApiResponse<IUser>>
) => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.create({ name, email, password });
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

export const authenticateUser = async (
  req: validateRequest,
  res: Response<ApiResponse<IUser>>
) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user || user.password !== password) {
      res.status(401).json({
        success: false,
        error: "invalid credentials",
      });
      return;
    } else {
      res.status(200).json({
        success: true,
        data: user,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      error: err,
    });
  }
};

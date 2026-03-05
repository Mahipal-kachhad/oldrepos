import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel";
import { IUser, IUserDocument } from "../types";
import { Request, Response } from "express";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name: username,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { id: user._id, role: (user as IUser).role },
      JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.json({
      user: {
        id: user._id,
        username,
        email,
        role: (user as IUser).role,
      },
      token,
    });
  } catch (err) {
    res.status(400).json({ error: "Registration failed" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = (await User.findOne({ name: username })) as IUserDocument;
    if (!user) return res.status(400).json({ error: "Invalid credentials" });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: "Invalid credentials" });
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "1d",
    });
    res.json({
      user: {
        id: user._id,
        username: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    res.status(400).json({ error: "Login failed" });
  }
};

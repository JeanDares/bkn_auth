import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.create(req.body.username, req.body.password);
    res
      .status(201)
      .json({ message: "User registered", user: { username: user.username } });
  } catch (err: unknown) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const user = User.findByUsername(req.body.username);
  if (user == null) {
    res.status(400).json({ message: "Cannot find user" });
  } else {
    if (await user.validatePassword(req.body.password)) {
      const accessToken = jwt.sign(
        { username: user.username },
        process.env.JWT_SECRET as string,
        { expiresIn: "24h" }
      );
      res.json({ accessToken });
    } else {
      res.status(403).json({ message: "Not Allowed" });
    }
  }
};

export const getProfile = (
  req: Request & { user: any },
  res: Response
): void => {
  res.json({ user: req.user });
};

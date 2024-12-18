import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { transporter } from "../config/mail";
import User from "../models/User";

export const forgotPassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  const user = User.findByUsername(req.body.email);
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  const link = `http://yourdomain.com/reset-password/${token}`;

  await transporter.sendMail({
    to: req.body.email,
    subject: "Password Reset Request",
    html: `Please click on the following link to reset your password: <a href="${link}">${link}</a>`,
  });

  res.json({ message: "Reset password link sent to your email account" });
};

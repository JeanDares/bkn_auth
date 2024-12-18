import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const resetSchema = Joi.object({
  token: Joi.string().required(),
  newPassword: Joi.string().min(6).required(),
});

export const validatePasswordReset = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = resetSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.details[0].message });
  } else {
    next();
  }
};

import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const emailSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const validateResetRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = emailSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.details[0].message });
  } else {
    next();
  }
};

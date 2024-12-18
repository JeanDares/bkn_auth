import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
  username: string;
}

interface AuthenticatedRequest extends Request {
  user?: UserPayload;
}

const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    res.sendStatus(401);
  } else {
    jwt.verify(token, process.env.JWT_SECRET as string, (err, user: any) => {
      if (err) {
        res.sendStatus(403);
      } else {
        req.user = user as UserPayload;
        next();
      }
    });
  }
};

export default authenticateToken;

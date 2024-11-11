import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/user.model";
import { AppError } from "../utils/appError";
import { catchAsync } from "../utils/catchAsync";
import { NextFunction, Request, Response } from "express";

export const protect = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.access_token;

    if (!token) return next(new AppError("You are not logged in", 401));

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    } catch (err) {
      return next(new AppError("Invalid token", 401));
    }

    const currentUser = await User.findById(decoded._id);
    if (!currentUser) return next(new AppError("User no longer exists", 401));

    req.user = {
      _id: currentUser._id.toString(),
      username: currentUser.username,
      role: currentUser.role,
    };

    next();
  }
);

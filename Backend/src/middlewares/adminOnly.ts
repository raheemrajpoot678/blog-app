import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/appError";
import { catchAsync } from "../utils/catchAsync";

export const adminOnly = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.user.role !== "admin") {
      return next(new AppError("Access denied. Admins only.", 403));
    }
    next();
  }
);

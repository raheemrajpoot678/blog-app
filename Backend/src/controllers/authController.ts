import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/appError";
import { catchAsync } from "../utils/catchAsync";
import User from "../models/user.model";
import { setCookie } from "../utils/helper";

export const signUp = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { password, username } = req.body;
    if (!password || !username) {
      return next(new AppError("All fields required", 400));
    }

    const newUser = new User({
      password,
      username,
    });
    await newUser.save();

    const token = newUser.generateAuthToken();
    setCookie(token, res);
    newUser.password = undefined;
    res.status(200).json({
      status: "success",
      message: "Account created successfully",
      user: newUser,
    });
  }
);

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

export const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username || !password)
      return next(new AppError("Username and password must be provided", 400));

    const user = await User.findOne({ username }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password)))
      return next(new AppError("Invalid email or password", 401));

    const token = user.generateAuthToken();
    user.password = undefined;

    setCookie(token, res);
    res.status(200).json({
      status: "success",
      message: "User logged in successfully",
      user,
    });
  }
);

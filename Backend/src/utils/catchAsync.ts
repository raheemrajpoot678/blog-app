import { NextFunction, Request } from "express";

export const catchAsync =
  (fn: any) => (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch((err: Error) => next(err));

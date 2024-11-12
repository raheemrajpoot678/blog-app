import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        _id: string;
        username: string;
        role: "user" | "admin";
      };
    }
  }
}

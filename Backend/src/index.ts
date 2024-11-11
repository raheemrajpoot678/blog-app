import express from "express";
import dotenv from "dotenv";
import "colors";
import cookieParser from "cookie-parser";
import expressSanitize from "express-mongo-sanitize";
import cors from "cors";

import connectToMongoDB from "./database/db";
import { AppError } from "./utils/appError";
import globleErrorHandler from "./controllers/errorController";
import authRouter from "./routes/auth.routes";

const app = express();

dotenv.config();
connectToMongoDB();
app.use(express.json());
app.use(cookieParser());
// prevent NoSQL injection
app.use(expressSanitize());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("API Working!");
});

// Catch all route handler for undefined routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't Find ${req.originalUrl} on this server`, 404));
});

// Global error handler
app.use(globleErrorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`.bgYellow);
});

import { AppError } from "../utils/appError";

interface ErrorHandler extends Error {
  statusCode?: number;
  status?: string;
  isOperational?: boolean;
  code?: number;
  name: string;
  errors?: Record<string, { message: string }>;
  path?: string;
  value?: any;
  errmsg?: string;
}

const handleCastErrorDb = (err: ErrorHandler): AppError => {
  const message = `Invalid ${err.path} : ${err.value}`;
  return new AppError(message, 400);
};

const handelDuplicateErrorDb = (err: ErrorHandler): AppError => {
  const value = err.errmsg?.match(/(["'])(\\?.+)\\1/)[0];
  const message = `Duplicate field value: ${value}. Please use another value.`;
  return new AppError(message, 400);
};

const handleValidationErrorDb = (err: ErrorHandler): AppError => {
  const errors = Object.values(err.errors || {}).map((el) => el.message);
  const message = `Invalid input data. ${errors.join(". ")}`;
  return new AppError(message, 400);
};

const sendErrorDev = (err: ErrorHandler, res: any): void => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const sendErrorPro = (err: ErrorHandler, res: any): void => {
  if (err.isOperational) {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.log("ERROR💥", err);
    res.status(500).json({
      status: "error",
      message: "Something went wrong, please try again later.",
    });
  }
};

const errorController = (
  err: ErrorHandler,
  req: any,
  res: any,
  next: any
): void => {
  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error: ErrorHandler = {
      ...err,
      name: err.name,
      message: err.message,
      isOperational: err.isOperational,
    };

    if (error.name === "CastError") error = handleCastErrorDb(error);
    if (error.code === 11000) error = handelDuplicateErrorDb(error);
    if (error.name === "ValidationError")
      error = handleValidationErrorDb(error);

    sendErrorPro(error, res);
  }
};

export default errorController;

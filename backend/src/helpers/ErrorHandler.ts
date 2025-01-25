import { Response } from "express";

class ErrorHandler {
  static send(res: Response, statusCode: number, error: string) {
    res.status(statusCode).json({
      success: false,
      statusCode,
      error,
    });
  }
}
export default ErrorHandler;

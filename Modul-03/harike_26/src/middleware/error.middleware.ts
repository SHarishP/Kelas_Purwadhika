// 1. Lakukan Import
import { Request, Response, NextFunction } from "express";

// 2. Buat Function
function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500).send({
    message: err.message,
  });
}

// End. Lakukan Export
export default errorMiddleware;

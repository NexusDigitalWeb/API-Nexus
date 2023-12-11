import { NextFunction, Request, Response } from "express";
import BadRequestException from "../errors/BadRequestException";
import NotFoundException from "../errors/NotFoundException";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof BadRequestException)
    return res.status(400).json({ error: { message: err.message, status: 1 } });
  if (err instanceof NotFoundException)
    return res.status(404).json({ error: { message: err.message, status: 1 } });
};

export default errorHandler;
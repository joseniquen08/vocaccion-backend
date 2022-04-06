import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../../shared/errors/ApplicationError";

export const userRequestValidator = (Schema: any) => async (req: Request, _res: Response, next: NextFunction) => {
  try {
    await Schema.validate({ body: req.body });
    next();
  } catch (error: any) {
    next(new ApplicationError(403, error.message, 'validation'));
  }
}
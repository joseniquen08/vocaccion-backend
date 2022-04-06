import { NextFunction, Request, Response } from "express";
import { ApplicationError } from '../../shared/errors/ApplicationError';
import { signIn, signUp } from '../entity/types/auth';
import { signInService, signUpService } from '../services/authServices';
import { generateToken } from '../utils/tokenManager';

export const signUpController = async (
  req: Request<{}, {}, signUp>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newUser = await signUpService(req.body);
    const token = generateToken({ id: newUser._id });
    res.status(201).json({ token });
  } catch (error: any) {
    next(new ApplicationError(error.status, `${error.message}`));
  }
}

export const signInController = async (
  req: Request<{}, {}, signIn>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = await signInService(req.body);
    res.status(200).json({ token });
  } catch (error: any) {
    next(new ApplicationError(error.status, `${error.message}`));
  }
}

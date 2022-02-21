import { NextFunction, Request, Response } from "express";
import { generateToken } from "../../../auth/utils/tokenManager";
import { signInUser, signUpUser } from "../entity/types/user";
import { signInUserService, signUpUserService } from "../services/userServices";

export const signUpUserController = async (req: Request<{}, {}, signUpUser>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const newUser = await signUpUserService(req.body);
    const token = generateToken({ id: newUser._id });
    res.status(200).json({ user: newUser, token });
  } catch (error) {
    next(error);
  }
}

export const signInUserController = async (req: Request<{}, {}, signInUser>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = await signInUserService(req.body);
    res.status(200).header('Authorization', 'Bearer ' + token).json({ success: true });
  } catch (error) {
    next(error);
  }
}

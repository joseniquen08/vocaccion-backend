import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { ApplicationError } from "../../../../shared/errors/ApplicationError";

export const signUpUserSchema = yup.object({
  body: yup.object({
    username: yup.string().strict().lowercase('Lowercase').trim('Error trim').required('Username is required'),
    first_name: yup.string().strict().trim('Error trim').required('First name is required'),
    last_name: yup.string().strict().trim('Error trim').required('Last name is required'),
    age: yup.number().min(14).positive().integer().required('Age is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(8, 'Min length is 8').required('Password is required'),
    role: yup.number().max(2).positive().integer().required('Role is required')
  })
});

export const signInUserSchema = yup.object({
  body: yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(8, 'Min length is 8').required('Password is required')
  })
});

export const userRequestValidator = (Schema: any) => async (req: Request, _res: Response, next: NextFunction) => {
  try {
    await Schema.validate({ body: req.body });
    next();
  } catch (error: any) {
    next(new ApplicationError(403, error.message, 'validation'));
  }
}
import dotenv from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import authRoutes from './auth/routes/authRoutes';

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(authRoutes);

app.use(function (error: any, _req: Request, res: Response, next: NextFunction) {
  res.status(error.status ? error.status : 500).send({ message: error.message, type: error.type });
});

export default app;

import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import authRoutes from './auth/routes/authRoutes';

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(authRoutes);

app.use((error: any, req: Request, res: Response) => {
  res.status(error.status ? error.status : 500).send({ message: error.message, type: error.type });
});

export default app;

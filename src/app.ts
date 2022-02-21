import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import userRoutes from './collections/user/routes/userRoutes';

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(userRoutes);

app.use((error: any, req: Request, res: Response) => {
  res.status(error.status ? error.status : 500).send({ message: error.message, type: error.type });
});

export default app;

import { Router } from "express";
import { signInController, signUpController } from '../controllers/authControllers';
import { authRequestValidator, signInSchema, signUpSchema } from "../middlewares/authReqValidator";

const router: Router = Router();

router.post('/signup', authRequestValidator(signUpSchema), signUpController);
router.post('/signin', authRequestValidator(signInSchema), signInController);

export default router;

import { Router } from "express";
import { signInUserController, signUpUserController } from "../controllers/userControllers";
import { signInUserSchema, signUpUserSchema, userRequestValidator } from '../middlewares/validator/userReqValidator';

const router: Router = Router();

router.post('/signup', userRequestValidator(signUpUserSchema), signUpUserController);
router.post('/signin', userRequestValidator(signInUserSchema), signInUserController);

export default router;
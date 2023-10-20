import { Router } from "express";
import { registerController, verifyController, loginController } from "../controller/userController";


export const userRouter = Router()

userRouter.post('/register', registerController);
userRouter.get('/user/verify/:userID/:emailToken', verifyController);
userRouter.post('/login', loginController);
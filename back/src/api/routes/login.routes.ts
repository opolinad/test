import express, { Router } from 'express';
import { loginUser } from "../modules/login/login.controller";
import { loginMiddleware } from "../middlewares/login.middleware";


const router: Router = express.Router();

router.post('', loginMiddleware, loginUser);

export default router;
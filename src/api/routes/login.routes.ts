import express, { Router } from 'express';
import { loginUser } from "../modules/login/login.controller";


const router: Router = express.Router();

router.post('', loginUser);

export default router;
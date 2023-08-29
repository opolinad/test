import express, { Router } from 'express';
import loginRoutes from './login.routes';
// import userRoutes from './user.routes';
// import favoriteRoutes from './favorite.routes';

const router:Router = express.Router();

router.use('/login', loginRoutes);
// router.use('/user', userRoutes);
// router.use('/favorite', favoriteRoutes);


export default router;
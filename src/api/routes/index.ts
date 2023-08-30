import express, { Router } from 'express';
import loginRoutes from './login.routes';
import pokemonRoutes from './pokemon.routes';
// import userRoutes from './user.routes';
import favoriteRoutes from './favorite.routes';
import { userExists } from "../middlewares/userExists.middleware";

const router:Router = express.Router();

router.use('/login', loginRoutes);
router.use('/pokemon', pokemonRoutes);
// router.use('/user', userRoutes);
router.use('/user/:userId/favorite', userExists, favoriteRoutes);


export default router;
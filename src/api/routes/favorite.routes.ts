import express, { Router } from 'express';
import { userExists } from "../middlewares/userExists.middleware";
import { pokemonExists } from "../middlewares/pokemonExists.middleware";
import { addPokemonToFavorite } from "../modules/favorite/favorite.controller";

const router: Router = express.Router();

router.post('/:pokemonId', pokemonExists, addPokemonToFavorite);

export default router;
import express, { Router } from 'express';
import { pokemonExists } from "../middlewares/pokemonExists.middleware";
import { addPokemonToFavorite, getFavoritePokemons, removePokemonFromFavorite } from "../modules/favorite/favorite.controller";

const router: Router = express.Router();

router.post('/:pokemonId', pokemonExists, addPokemonToFavorite);
router.post('/:pokemonId/remove', pokemonExists, removePokemonFromFavorite);
router.get('', getFavoritePokemons);

export default router;
import express, { Router } from 'express';
import { userExists } from "../middlewares/userExists.middleware";
import { pokemonExists } from "../middlewares/pokemonExists.middleware";
import { addPokemonToFavorite } from "../modules/favorite/favorite.controller";
import { getFavoritePokemons } from "../modules/pokemon/pokemon.controller";

const router: Router = express.Router();

router.post('/:pokemonId', pokemonExists, addPokemonToFavorite);
router.get('', getFavoritePokemons);

export default router;
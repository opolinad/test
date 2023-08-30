import express, { Router } from 'express';
import { getPokemons } from "../modules/pokemon/pokemon.controller";

const router: Router = express.Router();

router.get('', getPokemons);

export default router;
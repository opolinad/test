import { NextFunction, Response } from "express";
import { reqFavorite } from "../interfaces/response.interface";
import User from "../../db/models/user.model";

export const pokemonExists = async (req: reqFavorite, res: Response, next: NextFunction) => {
    const { pokemonId } = req.params;
    const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    if (isNaN(Number(pokemonId))) return res.status(403).json({ message: "Pokemon id must be a number" });

    const response = await fetch(POKEMON_URL);

    if (!response.ok) {
        return res.status(404).json({ message: "Pokemon doesn't exist" });
    }

    const jsonResponse = await response.json();

    req.pokemonId = Number(pokemonId);
    req.pokemonName = jsonResponse.name;
    next();
}
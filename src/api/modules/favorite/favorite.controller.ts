import {  Response } from "express";
import { reqFavorite, reqUser } from "../../interfaces/response.interface";
import { addToFavorite } from "./favorite.service";

export const addPokemonToFavorite = async (req: reqFavorite, res: Response) => {
  const response = await addToFavorite(req.user.id, req.pokemonId);
  res
    .status(response.status)
    .json({ msg: response.message });
};

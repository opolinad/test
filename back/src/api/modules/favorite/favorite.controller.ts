import {  Response } from "express";
import { reqFavorite } from "../../interfaces/response.interface";
import { addToFavorite, getFavorites, removeFromFavorite } from "./favorite.service";

export const addPokemonToFavorite = async (req: reqFavorite, res: Response) => {
  const response = await addToFavorite(req.user.id, req.pokemonId, req.pokemonName);
  res
    .status(response.status)
    .json({ msg: response.message });
};

export const removePokemonFromFavorite = async (req: reqFavorite, res: Response) => {
  const response = await removeFromFavorite(req.user.id, req.pokemonId);
  res
    .status(response.status)
    .json({ msg: response.message });
};


export const getFavoritePokemons = async (req: reqFavorite, res: Response) => {
  const response = await getFavorites(req.user.id);
  res
    .status(response.status)
    .json({ msg: response.message, data: response.data });
};
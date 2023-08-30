import { Request, Response } from "express";
import { getFavorites, getPokemonsFromApi } from "./pokemon.service";
import { reqFavorite } from "../../interfaces/response.interface";

export const getPokemons = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const response = await getPokemonsFromApi(page);
  res
    .status(response.status)
    .json({ msg: response.message, data: response.data });
};

export const getFavoritePokemons = async (req: reqFavorite, res: Response) => {
  const response = await getFavorites(req.user.id);
  res
    .status(response.status)
    .json({ msg: response.message, data: response.data });
};

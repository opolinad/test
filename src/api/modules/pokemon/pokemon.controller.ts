import { Request, Response } from "express";
import { getPokemonsFromApi } from "./pokemon.service";

export const getPokemons = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const response = await getPokemonsFromApi(page);
  res
    .status(response.status)
    .json({ msg: response.message, data: response.data });
};

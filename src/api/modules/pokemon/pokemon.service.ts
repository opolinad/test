import Favorite from "../../../db/models/favorite.model";
import { response } from "../../interfaces/response.interface";


export const getPokemonsFromApi = async (page=1): Promise<response<null | { pokemons: { [key: string]: string }[] }>> => {
    try {
        const resultsPerPage = 20;
        const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon?offset=${resultsPerPage*(page-1)}&limit=20`;
        const response = await fetch(POKEMON_URL);

        if (!response.ok) {
            return ({
                status: response.status,
                message: response.statusText
            });
        }

        const jsonResponse = await response.json();
        const pokemons = jsonResponse.results;

        return ({
            status: response.status,
            message: response.statusText,
            data: {
                pokemons
            }
        });

    } catch (error) {
        return ({
            status: 500,
            message: 'Internal server error'
        });
    }
}

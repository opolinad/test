import Favorite from "../../../db/models/favorite.model";
import { response } from "../../interfaces/response.interface";


export const getFavorites = async (userId: number): Promise<response<null | { pokemons: Favorite[] }>> => {
    try {
        const pokemons = await Favorite.findAll({
            where: {
                userId
            },
            attributes: ['pokemonId', 'pokemonName']
        });

        return ({
            status: 200,
            message: 'Favorite pokemons obtained',
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

export const addToFavorite = async (userId: number, pokemonId: number, pokemonName: string): Promise<response<null>> => {
    try {
        const [favorite, created] = await Favorite.findOrCreate({
            where: {
                userId,
                pokemonId,
                pokemonName
            }
        });

        let message = 'Favorite pokemon added';
        let status = 201;

        if (!created) {
            message = 'Pokemon already in favorites';
            status = 200;
        }

        return ({
            status,
            message
        });

    } catch (error) {
        return ({
            status: 500,
            message: 'Internal server error'
        });
    }
}

export const removeFromFavorite = async (userId: number, pokemonId: number): Promise<response<null>> => {
    try {
        await Favorite.destroy({
            where: {
                userId,
                pokemonId
            }
        });

        return ({
            status: 200,
            message: 'Pokemon removed from favorites',
        });

    } catch (error) {
        return ({
            status: 500,
            message: 'Internal server error'
        });
    }
}
import Favorite from "../../../db/models/favorite.model";
import { response } from "../../interfaces/response.interface";


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
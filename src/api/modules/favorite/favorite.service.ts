import Favorite from "../../../db/models/favorite.model";
import { response } from "../../interfaces/response.interface";


export const addToFavorite = async (userId: number, pokemonId: number): Promise<response<null>> => {
    try {
        await Favorite.create({
            userId,
            pokemonId
        });

        return ({
            status: 201,
            message: 'Favorite pokemon added'
        });

    } catch (error) {
        return ({
            status: 500,
            message: 'Internal server error'
        });
    }
}
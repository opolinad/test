import { Request } from "express";
import User from "../../db/models/user.model";

export interface response<dataInterface> {
    status: number;
    message: string;
    data?: dataInterface;
}

export interface reqUser extends Request {
    user: User;
}

export interface reqFavorite extends Request {
    user: User;
    pokemonId?: number;
    pokemonName?: string;
}
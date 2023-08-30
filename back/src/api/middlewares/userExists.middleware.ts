import { NextFunction, Response } from "express";
import { reqFavorite } from "../interfaces/response.interface";
import User from "../../db/models/user.model";

export const userExists = async (req: reqFavorite, res: Response, next: NextFunction) => {
    const { userId } = req.params;
    if (isNaN(Number(userId))) return res.status(403).json({ message: "User id must be a number" })

    const user = await User.findByPk(userId);

    if (!user) return res.status(404).json({ message: "User doesn't exist" })

    req.user = user;
    next();
}
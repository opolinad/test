import { NextFunction, Response } from "express";
import User from "../../db/models/user.model";
import { reqUser } from "../interfaces/response.interface";

export const loginMiddleware = async (req: reqUser, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(403).json({
            message: 'The request couldn\'t be completed, invalid credentials'
        })
    }

    const user = await User.findOne({
        raw: true,
        where: {
            username
        }
    });

    if (!user) {
        return res.status(403).json({
            message: 'The request couldn\'t be completed, invalid credentials'
        })
    }

    req.user = user;
    next();
}
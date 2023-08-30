import { NextFunction, Response, response } from "express";
import User from "../../db/models/user";
import { reqUser } from "../interfaces/response.interface";

export const loginMiddleware = async (req: reqUser, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(403).json({
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
        res.status(403).json({
            message: 'The request couldn\'t be completed, invalid credentials'
        })
    }

    req.user = user;
    next();
}
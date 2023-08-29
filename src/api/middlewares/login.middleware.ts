import { Request, Response, response } from "express";
import User from "../../db/models/user";
import { reqUser } from "../models/response.model";

export const loginMiddleware = async (req: reqUser, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        response.status(403).json({
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
        response.status(403).json({
            message: 'The request couldn\'t be completed, invalid credentials'
        })
    }

    req.user = user;
}
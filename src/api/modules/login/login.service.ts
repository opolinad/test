import User from "../../../db/models/user";
import { response } from "../../models/response.model";
import bcrypt from "bcrypt";
import * as jwt from 'jsonwebtoken';

export const validateCredentials = async (user: User, password: string): Promise<response<null | {token: string}>> => {
    try {

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            const token = await generateAuthToken(user.id);
            return ({
                status: 200,
                message: 'Login successful',
                data: {
                    token
                }
            });
        } else {
            return ({
                status: 403,
                message: 'The request couldn\'t be completed, invalid credentials'
            });
        }

    } catch (error) {
        return ({
            status: 403,
            message: 'The request couldn\'t be completed, invalid credentials'
        });
    }
}

const generateAuthToken = async (id: number): Promise<string> => {
    const token = await jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '15m',
    });
    return token;
}
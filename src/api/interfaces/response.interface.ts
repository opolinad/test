import { Request } from "express";
import User from "../../db/models/user";

export interface response<dataInterface>{
    status: number;
    message: string;
    data?: dataInterface;
}

export interface reqUser extends Request{
    user: User;
}
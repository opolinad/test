import { Request, Response } from "express";
import { validateCredentials } from "./login.service";
import { reqUser, response } from "../../models/response.model";

export const loginUser = async (req: reqUser, res: Response) => {
  const { password } = req.body;
  const response = await validateCredentials(req.user, password);
  res
    .status(response.status)
    .json({ msg: response.message, data: response.data });
};

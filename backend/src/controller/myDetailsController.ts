import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";
const userDetailsController = async (req: Request, res: Response) => {
  const { token } = req.body;
  if (!token) {
    return res.status(404).json({ message: "Something went wrong" });
  }
  const decoded = jwt.verify(token, "sdafsdffas") as {
    email: string;
    username: string;
    iat: number;
  };
  const user = await User.findOne({ email: decoded.email });
  return res.status(200).send({ user, message: "success" });
};
export default { userDetailsController };

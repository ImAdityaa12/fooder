import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "Something went wrong" });
  }
  bcrypt.compare(password, user.password, async (err, result) => {
    if (result) {
      const user = await User.findOne({ email });
      let token = jwt.sign({ email, username: user?.username }, "sdafsdffas");
      res.cookie("token", token);
      res.json(user);
    } else {
      res.json("something is wrong");
    }
  });
};

const logoutController = async (req: Request, res: Response) => {
  res.cookie("token", "", { maxAge: 1 });
  return res.json("logged out");
};
export default { loginController, logoutController };

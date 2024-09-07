import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      let token = jwt.sign({ email, username }, "sdafsdffas");
      res.cookie("token", token);
      return res.status(200).send(existingUser);
    }
    bcrypt.genSalt(10, (err, salt) => {
      if (err) res.send(err);
      bcrypt.hash(password, salt, async (err, hash) => {
        const newUser = new User({
          email,
          username,
          password: hash,
        });
        await newUser.save();
        const token = jwt.sign({ email, username }, "sdafsdffas");
        res.cookie("token", token);
        res
          .status(201)
          .json({ user: newUser, message: "User created successfully" });
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const updateUser = async (req: Request, res: Response) => {
  const { username, email, addressLine1, addressLine2 } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "Something went wrong" });
  }
  user.username = username;
  user.email = email;
  user.addressLine1 = addressLine1;
  user.addressLine2 = addressLine2;
  await user.save();
  return res.json(user);
};
export default { createCurrentUser, updateUser };

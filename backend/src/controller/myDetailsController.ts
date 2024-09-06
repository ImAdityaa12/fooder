import { Request, Response } from "express";
import jwt from "jsonwebtoken";
const userDetailsController = async (req: Request, res: Response) => {
  const { token } = req.body;
  if (!token) {
    return res.status(404).json({ message: "Something went wrong" });
  }
  const decoded = jwt.verify(token, "sdafsdffas");
  console.log(decoded);
  return res.status(200).send({ user: decoded, message: "success" });
};

export default { userDetailsController };

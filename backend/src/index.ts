import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import myUserRoute from "./routes/myUserRoute";
import User from "./models/user";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
dotenv.config();
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"));
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/api/my/user", myUserRoute);

app.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "Something went wrong" });
  }
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      res.send("login success");
    } else {
      res.send("something is wrong");
    }
  });
});
app.post("/userDetails", async (req: Request, res: Response) => {
  const { token } = req.body;
  if (!token) {
    return res.status(404).json({ message: "Something went wrong" });
  }
  const decoded = jwt.verify(token, "sdafsdffas");
  console.log(decoded);
  return res.status(200).send({ user: decoded, message: "success" });
});
app.get("/logout", async (req: Request, res: Response) => {
  res.cookie("token", "", { maxAge: 1 });
  return res.json("logged out");
});
app.listen(7000, () => {
  console.log("Server started on localhost 7000");
});

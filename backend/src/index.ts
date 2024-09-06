import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import myUserRoute from "./routes/myUserRoute";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute";
import detailRoute from "./routes/detailsRoute";
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
app.use("/auth", authRoute);
app.use("/details", detailRoute);
app.listen(7000, () => {
  console.log("Server started on localhost 7000");
});

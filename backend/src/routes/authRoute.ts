import express from "express";
import myAuthRoute from "../controller/myAuthController";

const router = express.Router();

router.post("/login", myAuthRoute.loginController);
router.get("/logout", myAuthRoute.logoutController);

export default router;

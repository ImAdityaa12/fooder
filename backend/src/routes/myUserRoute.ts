import express from "express";
import myUserController from "../controller/myUserController";

const router = express.Router();

router.post("/", myUserController.createCurrentUser);
router.put("/update", myUserController.updateUser);

export default router;

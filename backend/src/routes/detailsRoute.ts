import express from "express";
import detailsController from "../controller/myDetailsController";

const router = express.Router();

router.post("/user", detailsController.userDetailsController);

export default router;

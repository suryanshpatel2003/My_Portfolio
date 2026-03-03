import express from "express";
import { trackAction } from "../controllers/track.controller.js";

const router = express.Router();

router.post("/", trackAction);

export default router;
import express from "express";
const router = express.Router();
import {AiController} from "../../Controllers/index.js";


router.post("/Openai",AiController.RunAiController);

export default router;
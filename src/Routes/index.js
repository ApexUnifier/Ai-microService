import express from "express";
const router = express.Router();
import AiRoutes from "./AiRoutes/AiRoutes.js";

router.use("/chat",AiRoutes);

export default router;
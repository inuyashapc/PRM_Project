import express from "express";
import { brandController } from "../controllers/index.js";
const categoryRouter = express.Router();
categoryRouter.get("/", brandController.getAll);
categoryRouter.post("/", brandController.createBrand);
export default categoryRouter;

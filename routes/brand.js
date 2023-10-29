import express from "express";
import { brandController } from "../controllers/index.js";
const brandRouter = express.Router();
brandRouter.get("/", brandController.getAll);
brandRouter.post("/", brandController.createBrand);
export default brandRouter;

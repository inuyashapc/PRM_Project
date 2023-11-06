import express from "express";
import { cartController } from "../controllers/index.js";
const cartRouter = express.Router();
cartRouter.get("/", cartController.getAllCart);
cartRouter.post("/", cartController.createCart);
cartRouter.post("/detail", cartController.getDetailCart);
cartRouter.put("/", cartController.addProduct);

export default cartRouter;

import express from "express";
import { productController } from "../controllers/index.js";
const productRouter = express.Router();

productRouter.get("/", productController.getAll);
productRouter.get("/search", productController.getAllSearch);
productRouter.post("/", productController.createProduct);
productRouter.get("/fiveCheapest", productController.getFiveCheapestProducts);
productRouter.get("/cheapest", productController.getCheapestProducts);
productRouter.get("/:id", productController.getDetail);
productRouter.get("/brand/:brand", productController.getProductByBrand);
// productRouter.get("/:category", productController.getProductByCategory);
productRouter.get("/:id/comments", productController.getCommentByProduct);

export default productRouter;

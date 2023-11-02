import express from "express";
import { userController } from "../controllers/index.js";
const userRouter = express.Router();
userRouter.get("/", userController.getAllUser);
userRouter.post("/", userController.createUser);
userRouter.post("/login", userController.login);
userRouter.get("/:id", userController.getUserDetail);
userRouter.get("/checkexistusername/:username", userController.checknameexist);
export default userRouter;

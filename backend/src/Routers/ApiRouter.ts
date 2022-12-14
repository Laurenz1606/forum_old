import { Router } from "express";
import { InfoRouter } from "./Api/InfoRouter";
import { UserRouter } from "./Api/UserRouter";

//the api router
export const ApiRouter = Router();

//the api methods here
ApiRouter.use("/info", InfoRouter);
ApiRouter.use("/user", UserRouter);

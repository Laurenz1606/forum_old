import { Router } from "express";
import { InfoRouter } from "./Api/InfoRouter";

//the api router
export const ApiRouter = Router();

//the api methods here
ApiRouter.use("/info", InfoRouter);

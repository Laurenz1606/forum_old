import { sendData } from "@authfunctions/express";
import { Router } from "express";
import { env } from "../../Utils/env";

//the info router
export const InfoRouter = Router();

//get name of the application
InfoRouter.get("/name", async (req, res) => {
  //send the name of the forum
  return sendData(res, 200, { name: env("FORUM_NAME", true) });
});

import { sendData } from "@authfunctions/express";
import { Router } from "express";
import { env } from "../../Utils/env";

//the info router
export const InfoRouter = Router();

//the info methods here
InfoRouter.get("/name", async (req, res) => {
  //send the name of the forum
  return sendData(res, 200, { name: env("FORUM_NAME", true) });
});

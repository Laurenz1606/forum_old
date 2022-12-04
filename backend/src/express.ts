import cors from "cors";
import express from "express";
import { logger } from "./Components/logger";
import { ApiRouter } from "./Routers/ApiRouter";
import { env } from "./Utils/env";

//get listening port
const APP_PORT = env("PORT", true, "5000");

//create express app
const app = express();

//configure express app
app.use(express.json());
app.use(cors({ origin: env("CORS", false, "*") }));

//use routers
app.use("/api", ApiRouter);

//listen on APP_PORT
app.listen(APP_PORT, () => {
  //log that app is listening
  logger.info(`Express: App listening on Port ${APP_PORT}!`);
});

//log that app was created
logger.debug("Express: App created!");

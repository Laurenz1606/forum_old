import { createConnection } from "mongoose";
import { env } from "../Utils/env";
import { logger } from "./logger";

//create new mongoose connection
export const mongooseConnection = createConnection(
  env("MONGODB_URL", true) as string,
  {},
  (err) => {
    //log all errors occuring (prefere error stack else error message)
    if (err) return logger.error(err.stack ? err.stack : err.message);

    //log create connection
    logger.info("Mongoose: Create connection to MongoDB!");
  },
);

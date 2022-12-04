import { createConnection } from "mongoose";
import { logger } from "./logger";

//create new mongoose connection
export const mongooseConnection = createConnection("", {}, (err) => {
  //log all errors occuring (prefere error stack else error message)
  if (err) logger.error(err.stack ? err.stack : err.message);
});

import { Logger } from "@laurenz1606/logger";

//create logger instance
export const logger = new Logger({
  format: "[%L] %t %m",
  //enable debug logs when "DEBUG" env is set to "1" (can't use `env()` function instead of `process.env` because of import loop)
  debug: process.env.DEBUG === "1" ? true : false,
});

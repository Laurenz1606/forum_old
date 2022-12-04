import { AuthInstance } from "@authfunctions/express";
import { env } from "../Utils/env";
import { logger } from "./logger";

//create new auth instance
export const auth = new AuthInstance({
  accessTokenSecret: env("ACCESS_TOKEN_SECRET", true, ""),
  refreshTokenSecret: env("ACCESS_TOKEN_SECRET", true),
  emailValidation: true,
  expiresIn: Number(env("TOKEN_EXPIRES_IN", false, "900")),
  passwordValidation: "Y-Y-Y-Y-8",
});

//use the logger
auth.logger((level, message) => logger.log(level, message));

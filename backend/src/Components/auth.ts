import { AuthInstance } from "@authfunctions/express";
import { env } from "../Utils/env";

//create new auth instance
export const auth = new AuthInstance({
  accessTokenSecret: env("ACCESS_TOKEN_SECRET", true, ""),
  refreshTokenSecret: env("ACCESS_TOKEN_SECRET", true),
  emailValidation: true,
  expiresIn: Number(env("TOKEN_EXPIRES_IN", false, "900")),
  passwordValidation: "Y-Y-Y-Y-8",
});

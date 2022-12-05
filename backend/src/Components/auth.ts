import { AuthInstance } from "@authfunctions/express";
import { UserModel } from "../Models/UserModel";
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

//use get user by mail
auth.use("getUserByMail", async ({ email }) => {
  try {
    //get user from database by email
    const user = await UserModel.findOne({ email: email });

    //check if no user was found
    if (!user) return [false, null];

    //return the user
    return [
      false,
      {
        email: user.email,
        hashedPassword: user.password,
        id: user._id,
        username: user.username,
      },
    ];
  } catch (err) {
    //log the error
    logger.error(err as Error);

    //return that error occured
    return [true, null];
  }
});

//use get user by name
auth.use("getUserByName", async ({ username }) => {
  try {
    //get user from database by username
    const user = await UserModel.findOne({ username: username });

    //check if no user was found
    if (!user) return [false, null];

    //return the user
    return [
      false,
      {
        email: user.email,
        hashedPassword: user.password,
        id: user._id,
        username: user.username,
      },
    ];
  } catch (err) {
    //log the error
    logger.error(err as Error);

    //return that error occured
    return [true, null];
  }
});

//use store user
auth.use("storeUser", async ({ email, hashedPassword, id, username }) => {
  try {
    //create new user
    await UserModel.create({
      _id: id,
      email: email,
      fullname: username,
      password: hashedPassword,
      username: username,
    });

    //return no error
    return [false];
  } catch (err) {
    //log the error
    logger.error(err as Error);

    //return that error occured
    return [true];
  }
});

import { sendData } from "@authfunctions/express";
import { Router } from "express";
import { Document } from "mongoose";
import { auth } from "../../Components/auth";
import { logger } from "../../Components/logger";
import { IUser, UserModel } from "../../Models/UserModel";

//the user router
export const UserRouter = Router();

//update a users fullname
UserRouter.put("/updateFullname", auth.validateMiddleware, async (req, res) => {
  try {
    //get fullname from body
    const { fullname } = req.body;

    //check for new fullname
    if (typeof fullname !== "string")
      return sendData(res, 403, { err: true, code: 1, newName: null });

    //get the user from the database and update fullname
    const user = (await UserModel.findById(
      res.locals.payload.id,
    )) as Document<IUser> | null;

    //check if user is null / undefined and send error if
    if (!user) return sendData(res, 404, { err: true, code: 2, newName: null });

    //update fullname
    await UserModel.updateOne(
      { _id: user._id },
      { $set: { fullname: fullname } },
    );

    //send new name to frontend
    return sendData(res, 200, { status: "err", newName: fullname });
  } catch (err) {
    //log the error
    logger.error(err as Error);

    //return server error
    return sendData(res, 500, { err: true, code: 0, newName: null });
  }
});

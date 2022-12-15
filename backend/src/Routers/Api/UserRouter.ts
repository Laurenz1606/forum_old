import { sendData } from "@authfunctions/express";
import { Router } from "express";
import { auth } from "../../Components/auth";
import { logger } from "../../Components/logger";
import { IUserPublic, UserModel } from "../../Models/UserModel";
import { IApiResponse } from "../ApiRouter";

//the user router
export const UserRouter = Router();

//interface for infos
interface IInfos extends IApiResponse {
  data: IUserPublic | null;
}

//get public user infos
UserRouter.get("/infos", auth.validateMiddleware, async (req, res) => {
  try {
    //get user from database
    const user = await UserModel.findById(res.locals.payload.id).exec();

    //check that user exists
    if (!user)
      return sendData<IInfos>(res, 404, { err: true, code: 1, data: null });

    //send user info to frontend
    return sendData<IInfos>(res, 500, {
      err: false,
      code: 0,
      data: {
        _id: user._id,
        email: user.email,
        fullname: user.fullname,
        username: user.username,
      },
    });
  } catch (err) {
    //log the error
    logger.error(err as Error);

    //return server error
    return sendData<IInfos>(res, 500, { err: true, code: -1, data: null });
  }
});

//interface for updateFullname
interface IUpdateFullname extends IApiResponse {
  newName: string | null;
}

//update a users fullname
UserRouter.put("/updateFullname", auth.validateMiddleware, async (req, res) => {
  try {
    //get fullname from body
    const { fullname } = req.body;

    //check for new fullname
    if (typeof fullname !== "string")
      return sendData<IUpdateFullname>(res, 403, {
        err: true,
        code: 1,
        newName: null,
      });

    //get the user from the database and update fullname
    const user = await UserModel.findById(res.locals.payload.id).exec();

    //check if user is null / undefined and send error if
    if (!user)
      return sendData<IUpdateFullname>(res, 404, {
        err: true,
        code: 2,
        newName: null,
      });

    //update fullname
    await UserModel.updateOne(
      { _id: user._id },
      { $set: { fullname: fullname } },
    ).exec();

    //send new name to frontend
    return sendData<IUpdateFullname>(res, 200, {
      err: false,
      code: 0,
      newName: fullname,
    });
  } catch (err) {
    //log the error
    logger.error(err as Error);

    //return server error
    return sendData<IUpdateFullname>(res, 500, {
      err: true,
      code: -1,
      newName: null,
    });
  }
});

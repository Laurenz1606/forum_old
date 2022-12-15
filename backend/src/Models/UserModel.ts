import { Schema } from "mongoose";
import { mongooseConnection } from "../Components/mongoose";

//the interface for the basic info of a user
export interface IUserBasic {
  _id: string;
  username: string;
}

//the interface for the public info of a user
export interface IUserPublic extends IUserBasic {
  email: string;
  fullname: string;
}

//the interface for a user
export interface IUser extends IUserPublic {
  password: string;
}

//the user schema
const UserSchema = new Schema<IUser>({
  _id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullname: {
    default: "",
    type: String,
    required: true,
  },
});

//the user model
export const UserModel = mongooseConnection.model("user", UserSchema);

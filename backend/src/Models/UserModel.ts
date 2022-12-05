import { Schema } from "mongoose";
import { mongooseConnection } from "../Components/mongoose";

//the interface for a user
export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  fullname: string;
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

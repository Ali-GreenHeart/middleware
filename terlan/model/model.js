import { Schema, model } from "mongoose";

export const userShcema = new Schema(
  {
    name: String,
    surname: String,
    email: String,
    phone: String,
    address: String,
    password: String,
    profilePicture: String,
  },
  { versionKey: false }
);
const modelUser = model("user", userShcema);
export default modelUser;

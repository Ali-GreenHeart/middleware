import dotenv from "dotenv";
import { connect } from "mongoose";
dotenv.config();
export const port = process.env.USER_PORT;
const url = process.env.USER_URL;

export const connectDB = async () => {
  await connect(url);
  console.log("mongodb connected");
};

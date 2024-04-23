import express from "express";
import { connectDB, port } from "./utils/userDB.js";
import userRouter from "./routers/userRouter.js";
import { corsDb } from "./utils/cros.js";

const app = express();
connectDB();
app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded());
app.use(function (req, res, next) {
  corsDb(req, res, next);
});

app.use("/users", userRouter);

app.listen(port, () => {
  console.log("is up to date");
});

import { Router } from "express";
import upload from "../utils/multer.js";
import path from "path";
import {
  deleteUser,
  getAlluser,
  getByIdUser,
  getByTypes,
  loginUser,
  userLogin,
  postUser,
  registerPost,
  registerUser,
  userProfile,
} from "../services/userService.js";

const userRouter = new Router();

userRouter.get("/register", registerUser);

userRouter.get("/login", loginUser);
userRouter.post("/login", userLogin);

userRouter.post("/register", upload.single("profilePicture"), registerPost);
userRouter.get('/profile', userProfile)
userRouter.get("/", async (req, res) => {
  if (Object.keys(req.query).length && !req.query.limit) {
    const usetByType = await getByTypes(req.query);
    res.send({ count: usetByType.length, data: usetByType });
  } else {
    const useryByLimit = await getAlluser(+req.query.limit);
    res.send(useryByLimit);
  }
});

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  const getById = await getByIdUser(id);
  res.send(getById);
});

userRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const userDel = await deleteUser(id);
  res.send(userDel);
});

export default userRouter;

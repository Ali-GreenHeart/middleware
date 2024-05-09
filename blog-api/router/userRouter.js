import { Router } from "express";
import { createUser, deleteUser, editUser, getUsers } from "../service/userService.js";

const userRouter = new Router()

userRouter.get("/", async (req, res) => {
    const items = await getUsers()
    res.status(200).send(items)
})
userRouter.post("/", async (req, res) => {
    const msg = await createUser(req.body)
    res.status(200).send(msg)
})
userRouter.put("/:id", async (req, res) => {
    const msg = await editUser(req.params.id, req.body)
    res.status(200).send(msg)
})
userRouter.delete("/:id", async (req, res) => {
    const msg = await deleteUser(req.params.id)
    res.status(200).send(msg)
})


export default userRouter;

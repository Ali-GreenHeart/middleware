import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../services/user.js";

const userRouter = new Router();

userRouter.get('/', async (req, res) => {
    const users = await getUsers(+req.query.limit)
    res.send(users)
})
userRouter.get('/:id', async (req, res) => {
    const user = await getUserById(req.params.id)
    res.send(user)
})
userRouter.post('/', async (req, res) => {
    const body = req.body
    const id = await createUser(body)
    res.send({
        message: 'New user has been created!',
        id
    })
})
userRouter.put('/:id', async (req, res) => {
    const up = await updateUser(req.params.id, req.body)
    res.send({ message: "User successfully updated!" })
})
userRouter.delete('/:id', async (req, res) => {
    await deleteUser(req.params.id)
    res.send({ message: "User successfully deleted!" })
})
export default userRouter;

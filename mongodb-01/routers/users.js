import { Router } from "express";
import { createUser, getUserById, getUsers } from "../services/user.js";

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

})
export default userRouter;

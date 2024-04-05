import { Router } from "express";
import usersRoutes from '../router/usersRoutes.js'
import authMiddleware from "../middlewares/authMiddleware.js";
const protectedRouter = new Router()

protectedRouter.use(authMiddleware)
protectedRouter.use("/users", usersRoutes)

// nested routes

protectedRouter.get("/profile", (req, res) => {
    res.send("some private information")
})
protectedRouter.get('/friends', (req, res) => {
    res.send("some private friends")
})
protectedRouter.get('/chats', (req, res) => {
    res.send("some private chats")
})
export default protectedRouter;

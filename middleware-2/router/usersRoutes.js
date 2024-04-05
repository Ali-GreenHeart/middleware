import { Router } from "express";
const usersRoutes = new Router()

// /users
usersRoutes.get("/", (req, res) => {
    res.send("get users")
})
usersRoutes.get('/:id', (req, res) => {
    res.send("get users by id")
})
usersRoutes.get('/:gender', (req, res) => {
    res.send("get users by being male...")
})
export default usersRoutes;

import express from 'express'
import protectedRouter from './router/protectedRoutes.js'

const app = express()
app.get("/", (req, res) => {
    res.send("home page")
})
app.get("/login", (req, res) => {
    res.send("this is login page")
})

app.use("/", protectedRouter)


app.listen(4566, () => {
    console.log('server is up....')
})

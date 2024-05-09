import { config } from 'dotenv'
import express from 'express'
import categRouter from './router/categoryRouter.js'
import dbConnect from './utils/dbConnect.js'
import userRouter from './router/userRouter.js'
config()
dbConnect()
const app = express()
app.use(express.json())
app.use("/category", categRouter)
app.use("/user", userRouter)

app.listen(process.env.BLOG_API_PORT, () => {
    console.log('server is up...')
})

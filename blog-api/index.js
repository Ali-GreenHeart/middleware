import { config } from 'dotenv'
import express from 'express'
import categRouter from './router/categoryRouter.js'
import dbConnect from './utils/dbConnect.js'
import userRouter from './router/userRouter.js'
import blogRouter from './router/blogRouter.js'
config()
dbConnect()
const app = express()
app.use(express.json())
app.use("/category", categRouter)
app.use("/user", userRouter)
app.use("/blog", blogRouter)

app.listen(process.env.BLOG_API_PORT, () => {
    console.log('server is up...')
})

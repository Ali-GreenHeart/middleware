import { config } from 'dotenv'
import express from 'express'
config()
const app = express()




app.listen(process.env.BLOG_API_PORT, () => {
    console.log('server is up...')
})

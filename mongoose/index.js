import express from 'express'
import connectDb from './connect.js'
import userModel from './model/userModel.js'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import { secretJwt } from './secret.js'
import checkIsAuthMiddleware from './middlewares/checkIsAuth.js'


connectDb()
const app = express()
app.use(express.json())

app.post('/register', async (req, res) => {
    let password = await bcrypt.hash(req.body.password, 10)
    await userModel.create({ ...req.body, password })
    res.send("User has been created!")
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body
    const { _doc: { password: passwordInDb, ...frontUser } } = await userModel.findOne({ username })
    if (passwordInDb) {
        const isPwdTrue = await bcrypt.compare(password, passwordInDb)
        if (isPwdTrue) {
            // res.send(frontUser)
            const token = jwt.sign({ id: frontUser._id }, secretJwt)
            res.send(token)
        } else {
            res.status(401).send('Password is wrong!')
        }
    } else {
        res.status(404).send("user doesn't exist")
    }
})

app.get('/profile', checkIsAuthMiddleware, async (req, res) => {
    const id = req.user.id
    const user = await userModel.findById(id).select("-password")
    res.status(200).send(user)
    // 2. ozunun profile-melumatlarini gormelidir!
    // JWT!
})

app.listen(3457, () => {
    console.log('server is up')
})


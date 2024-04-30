import express from 'express'
import connectDb from './connect.js'
import userModel from './model/userModel.js'
import bcrypt from 'bcrypt'

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
            res.send(frontUser)
        } else {
            res.status(401).send('Password is wrong!')
        }
    } else {
        res.status(404).send("user doesn't exist")
    }
})

app.get('/profile', async (req, res) => {
    // 1. adam login etmis olmalidir!
    // 2. ozunun profile-melumatlarini gormelidir!
    // JWT!
})

app.listen(3457, () => {
    console.log('server is up')
})


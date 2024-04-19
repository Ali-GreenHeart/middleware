import express from "express"
import path from 'path'
const app = express()

app.use(express.static("pages"))
app.use(express.urlencoded())

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('pages/registration.html'))
})
app.post("/register", (req, res) => {
    const formData = req.body
    console.log(formData)
    console.log('here we are...')
    res.send('databazaya yazdir....')
})

app.listen(4567, () => {
    console.log('server is up...')
})

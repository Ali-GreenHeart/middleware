import express from "express"
import path from 'path'
import upload from "./utils/multer.js"
const app = express()

app.use(express.static("pages"))
app.use(express.urlencoded()) // form-daki datalari goturmek

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('pages/registration.html'))
})
// upload.sigle -> fayli elave etmek ucun multer middleware-si
app.post("/register", upload.single("profilePicture"), (req, res) => {
    const formData = req.body
    const file = req.file.filename
    console.log(formData)
    console.log(file)
    console.log('here we are...')
    res.send('databazaya yazdir....')
})

app.listen(4567, () => {
    console.log('server is up...')
})

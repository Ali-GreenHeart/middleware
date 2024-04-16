import express from 'express'
import mongoose from 'mongoose'
import bookModel from './schema/book.js'


const connectionString = `mongodb+srv://node02:node02@cluster0.twl8ykw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(connectionString)
    .then((value) => {
        console.log('mongodb connected')
    })

const app = express()
app.use(express.json())



app.get('/', async (req, res) => {
    const a = await bookModel.find()
    res.send(a)
})
app.post('/', async (req, res) => {
    const a = await bookModel.create(req.body)
    res.send(a)
})
app.put('/:id', async (req, res) => {
    const id = req.params.id
    const a = await bookModel.findByIdAndUpdate(
        id,
        req.body,
        {
            new: true
        }
    )
    res.send(a)
})
// delete ozunuz yazin !
app.listen(3457, () => {
    console.log('server is up')
})

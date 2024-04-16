import express from 'express'
import bookModel from './model/book.js'
import connectDb from './connect.js'

connectDb()


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

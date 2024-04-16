import express from 'express'
import mongoose from 'mongoose'
import bookModel from './schema/book.js'

const connectionString = `mongodb+srv://node02:node02@cluster0.twl8ykw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(connectionString)
    .then((value) => {
        console.log('mongodb connected')
    })

const app = express()



app.get('/', (req, res) => {

})

app.listen(3457, () => {
    console.log('server is up')
})

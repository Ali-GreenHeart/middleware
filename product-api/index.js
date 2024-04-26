import express from "express"
import path from 'path'
import upload from "./utils/multer.js"
import connect from "./utils/db.js"
import productModel from "./model/product.js"
import { unlink } from "fs/promises"

const app = express()

app.use(express.static("pages"))
app.use(express.static("images"))
app.use(express.urlencoded())

app.get('/products', async (req, res) => {
    const { category } = req.query
    let filterObj = {}
    if (category) {
        filterObj.category = category
    }
    const products = await productModel.find(filterObj)
    res.send(products)
})
app.get('/products-page', async (req, res) => {
    res.sendFile(path.resolve('./pages/products.html'))
})

app.get('/add-product', (req, res) => {
    res.sendFile(path.resolve('./pages/add-product.html'))
})

app.post('/add-product', upload.single("productPicture"), async (req, res) => {
    const { filename } = req.file
    const response = await productModel.create({ ...req.body, filename })
    if (response) {
        res.status(201).send(`New Product has been added!`)
    } else {
        res.send('Error occured!')
    }
})
app.delete('/product/:id', async (req, res) => {
    const { id } = req.params
    const { filename } = await productModel.findByIdAndDelete(id)
    await unlink(path.resolve(`./images/${filename}`))
    res.redirect('/products-page')
})
app.listen(4567, () => {
    console.log('server is up...')
})

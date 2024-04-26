import express from "express"
import path from 'path'
import upload from "./utils/multer.js"
import connect from "./utils/db.js"
import productModel from "./model/product.js"

const app = express()

app.use(express.static("pages"))
app.use(express.urlencoded())

app.get('/products', async (req, res) => {
    const products = await productModel.find()
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
app.listen(4567, () => {
    console.log('server is up...')
})

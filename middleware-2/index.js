import express from 'express'

const app = express()

app.get("/", (req, res) => {

})

app.get("/", () => { })


app.listen(4566, () => {
    console.log('server is up....')
})

import express from 'express'
import CounterMiddleWare from './middlewares/counter.js'
import getCountMiddleWare from './middlewares/getCount.js'

const app = express()

app.use(express.static("./public"))
app.set('view engine', 'pug')

app.get('/', CounterMiddleWare('index'), getCountMiddleWare, (req, res) => {
    res.render('index', { title: 'Home', message: 'Im home page', count: req.viewCount })
})
app.get('/about', CounterMiddleWare('about'), getCountMiddleWare, (req, res) => {
    res.render('about', { title: 'About', message: 'Im in about page', count: req.viewCount })
    // res.sendFile(path.resolve("./pages/about.html"))
})

// currying
app.get("/blog", CounterMiddleWare('bloq'), getCountMiddleWare, (req, res) => {
    // hele ki qalsin
    // hele iki qalsin
    res.render('blog', { title: 'Blog', message: 'Im in bloq page', count: req.viewCount })
    // res.sendFile(path.resolve("./pages/blog.html"))
})
app.get("/services", CounterMiddleWare('services'), getCountMiddleWare, (req, res) => {
    res.render('services', { title: 'Services', message: 'Im in services page', count: req.viewCount })
    // res.sendFile(path.resolve("./pages/services.html"))
})

app.listen(4566, () => {
    console.log('server is up....')
})
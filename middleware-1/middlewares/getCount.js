import { readFile } from 'fs/promises'
import path from 'path'

const getCountMiddleWare = async (req, res, next) => {
    const fileName = path.resolve(`./public/counter/${req.pageName}.txt`)
    let count = +((await readFile(fileName)).toString())
    req.viewCount = count
    next()
}

export default getCountMiddleWare;   
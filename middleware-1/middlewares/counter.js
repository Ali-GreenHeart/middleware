import { readFile, writeFile } from 'fs/promises'
import path from 'path'

const CounterMiddleWare = (pageName) => {
    return async (req, res, next) => {
        req.pageName = pageName
        const fileName = path.resolve(`./public/counter/${pageName}.txt`)
        let count = 0;
        try {
            count = +((await readFile(fileName)).toString())
        } catch (er) { }
        finally {
            await writeFile(fileName, (count + 1) + '')
        }
        next()
    }
}

export default CounterMiddleWare;   
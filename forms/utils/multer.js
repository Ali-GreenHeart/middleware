import multer from "multer";
import path from 'path'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve("./images"))
    },
    filename: (req, file, cb) => {
        const { name, surname } = req.body
        const extensionName = path.extname(file.originalname)
        const newName = `${name?.toLowerCase()}-${surname?.toLowerCase()}${extensionName?.toLowerCase()}`
        cb(null, newName)
    }
})




const upload = multer({ storage })

export default upload;

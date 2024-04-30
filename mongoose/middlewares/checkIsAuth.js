import { secretJwt } from "../secret.js"
import jwt from 'jsonwebtoken'

export default function checkIsAuthMiddleware(req, res, next) {
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, secretJwt, (err, dec) => {
        if (err) {
            res.status(401).send("Not authenticated!")
            return;
        }
        req.user = dec
        next()
    })
}

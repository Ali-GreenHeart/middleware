function authMiddleware(req, res, next) {
    const token = req.headers.authorization.split(' ')[1]
    if (token === 'hiddenTokenABC') {
        next()
    } else {
        res.status(401).send({ message: 'Unauthorized' })
    }
}


export default authMiddleware;

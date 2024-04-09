import express from 'express';
import userRouter from './routers/users.js';
import client from './utils/mongoClient.js';

const app = express()
app.use(express.json())
app.use("/users", userRouter)

app.get('/', (req, res) => {
    client
        .db("sample_mflix")
        .collection("comments")
        .findOne({
            name: "Taylor Scott"
        })
        .then((value) => {
            res.send(value)
        })
})

app.listen(4566, () => {
    console.log('server is up....')
})




// async function run() {
//     try {
//         await client.connect();
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);

import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://node02:node02pwd@node02-cluster.wvcagzx.mongodb.net/?retryWrites=true&w=majority&appName=node02-cluster";
// connection string -> RDMBS (mssql, mysql)
const app = express()

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        deprecationErrors: true,
    }
});

client.connect().then(() => {
    console.log('connect mongodb successfully')
})


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

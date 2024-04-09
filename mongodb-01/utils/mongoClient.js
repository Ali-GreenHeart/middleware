import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://node02:node02pwd@node02-cluster.wvcagzx.mongodb.net/?retryWrites=true&w=majority&appName=node02-cluster";
// connection string -> RDMBS (mssql, mysql)

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        deprecationErrors: true,
    }
});


client.connect().then(() => {
    console.log('connect mongodb successfully')
})

export default client;

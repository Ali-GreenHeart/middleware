import { connect } from "mongoose"

async function connectDb() {
    const connectionString = `mongodb+srv://node02:node02@cluster0.twl8ykw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    await connect(connectionString)
    console.log('mongodb connected')
}

export default connectDb;

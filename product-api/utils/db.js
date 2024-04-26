import { connect } from "mongoose";
const uri = 'mongodb+srv://node02:node02@cluster0.twl8ykw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
connect(uri)

export default connect;

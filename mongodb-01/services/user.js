import client, { getByObjectId } from "../utils/mongoClient.js";

const collection = client
    .db('sample_mflix')
    .collection("users")

export const getUsers = async (limit) => {
    const users = await collection
        .find({}, {
            limit
        })
        .toArray()
    return users;
}
export const getUserById = async (id) => {
    const user = await collection
        .findOne({
            _id: getByObjectId(id)
        })
    return user;
}
export const createUser = async (newUser) => {
    const { insertedId } = await collection.insertOne(newUser)
    return insertedId;
}

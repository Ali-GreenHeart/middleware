import model from "../model/userModel.js"

export const getUsers = async () => {
    const items = await model.find()
    return items;
}
export const createUser = async (data) => {
    await model.create(data)
    return "User yarandi";
}
export const editUser = async (id, data) => {
    await model.findByIdAndUpdate(id, data)
    return "User deyisildi";
}
export const deleteUser = async (id) => {
    await model.findByIdAndDelete(id)
    return "User silindi";
}

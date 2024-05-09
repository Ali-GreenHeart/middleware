import model from "../model/blogModel.js"

export const getBlogs = async () => {
    const items = await model
        .find()
        .populate({ path: 'userId', select: '-password' })
        .populate('categoryId')
        .exec()
    return items;
}
export const createBlog = async (data) => {
    await model.create(data)
    return "Blog yarandi";
}
export const editBlog = async (id, data) => {
    await model.findByIdAndUpdate(id, data)
    return "Blog deyisildi";
}
export const deleteBlog = async (id) => {
    await model.findByIdAndDelete(id)
    return "Blog silindi";
}

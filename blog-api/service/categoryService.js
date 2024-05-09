import categoryModel from "../model/categoryModel.js"

export const getCategories = async () => {
    const categories = await categoryModel.find()
    return categories;
}
export const createCategory = async (data) => {
    await categoryModel.create(data)
    return "category yarandi";
}
export const editCategory = async (id, data) => {
    await categoryModel.findByIdAndUpdate(id, data)
    return "category deyisildi";
}
export const deleteCategory = async (id) => {
    await categoryModel.findByIdAndDelete(id)
    return "category silindi";
}

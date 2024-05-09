import { Router } from "express";
import { createCategory, deleteCategory, editCategory, getCategories } from "../service/categoryService.js";

const categRouter = new Router()

categRouter.get("/", async (req, res) => {
    const categs = await getCategories()
    res.status(200).send(categs)
})
categRouter.post("/", async (req, res) => {
    const msg = await createCategory(req.body)
    res.status(200).send(msg)
})
categRouter.put("/:id", async (req, res) => {
    const msg = await editCategory(req.params.id, req.body)
    res.status(200).send(msg)
})
categRouter.delete("/:id", async (req, res) => {
    const msg = await deleteCategory(req.params.id)
    res.status(200).send(msg)
})


export default categRouter;

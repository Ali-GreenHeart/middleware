import { Router } from "express";
import { createBlog, deleteBlog, editBlog, getBlogs } from "../service/blogService.js";

const blogRouter = new Router()

blogRouter.get("/", async (req, res) => {
    const items = await getBlogs()
    res.status(200).send(items)
})
blogRouter.post("/", async (req, res) => {
    const msg = await createBlog(req.body)
    res.status(200).send(msg)
})
blogRouter.put("/:id", async (req, res) => {
    const msg = await editBlog(req.params.id, req.body)
    res.status(200).send(msg)
})
blogRouter.delete("/:id", async (req, res) => {
    const msg = await deleteBlog(req.params.id)
    res.status(200).send(msg)
})


export default blogRouter;

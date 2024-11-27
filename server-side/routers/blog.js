const blogRouter = require('express').Router();
const BlogController = require('../controllers/BlogController');

blogRouter.get("/blog", BlogController.getAllBlog);
blogRouter.post("/blog", BlogController.newBlog);
blogRouter.get("/blog/:id", BlogController.getBlog);
blogRouter.put("/blog/:id", BlogController.editBlog);
blogRouter.delete("/blog/:id", BlogController.deleteBlog);

module.exports = blogRouter;
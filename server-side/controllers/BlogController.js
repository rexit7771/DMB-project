const { Blog } = require('../models');

module.exports = class BlogController {
    static async getAllBlog(req, res, next) {
        try {
            req.status(200).json({ message: "Udah di Get All Blog" });
        } catch (error) {
            next(error);
        }
    };

    static async getBlog(req, res, next) {
        try {
            req.status(200).json({ message: "Udah di Get Blog" });
        } catch (error) {
            next(error);
        }
    };

    static async newBlog(req, res, next) {
        try {
            req.status(200).json({ message: "Udah di New Blog" });
        } catch (error) {
            next(error);
        }
    };

    static async editBlog(req, res, next) {
        try {
            req.status(200).json({ message: "Udah di Edit Blog" });
        } catch (error) {
            next(error);
        }
    };

    static async deleteBlog(req, res, next) {
        try {
            req.status(200).json({ message: "Udah di Delete Blog" });
        } catch (error) {
            next(error);
        }
    }
}
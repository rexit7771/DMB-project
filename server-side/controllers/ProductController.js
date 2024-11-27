const { Product } = require('../models');

module.exports = class ProductController {
    static async getAllProduct(req, res, next) {
        try {
            res.status(200).json({ message: "Udah di Get All Product" });
        } catch (error) {
            next(error);
        }
    };

    static async getProduct(req, res, next) {
        try {
            req.status(200).json({ message: "Udah di Get Product" });
        } catch (error) {
            next(error);
        }
    };

    static async newProduct(req, res, next) {
        try {
            req.status(200).json({ message: "Udah di New Product" });
        } catch (error) {
            next(error);
        }
    };

    static async editProduct(req, res, next) {
        try {
            req.status(200).json({ message: "Udah di Edit Product" });
        } catch (error) {
            next(error);
        }
    };

    static async deleteProduct(req, res, next) {
        try {
            req.status(200).json({ message: "Udah di Delete Product" });
        } catch (error) {
            next(error);
        }
    }

}
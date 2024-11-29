const { Product } = require('../models');

module.exports = class ProductController {
    static async getAllProduct(req, res, next) {
        try {
            const products = await Product.findAll();

            res.status(200).json(products);
        } catch (error) {
            next(error);
        }
    };

    static async getProduct(req, res, next) {
        try {
            const { id } = req.params;
            const product = await Product.findByPk(id);
            res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    };

    static async newProduct(req, res, next) {
        try {
            const { id } = req.user;
            const data = req.body;
            data.UserId = id;
            await Product.create(data);
            res.status(200).json({ message: `Product has been added by user with id ${id}` });
        } catch (error) {
            next(error);
        }
    };

    static async editProduct(req, res, next) {
        try {
            const product = req.body;
            const { id } = +req.params;
            await Product.update({ product }, { where: { id } })
            res.status(200).json({ message: `Product has been edited` });
        } catch (error) {
            next(error);
        }
    };

    static async approvalProduct(req, res, next) {
        try {
            const { status } = req.body;
            const { id } = +req.params;
            await Product.update({ status }, { where: { id } });
            res.status(200).json({ message: `Product with id ${id} has been approved by admin with id ${req.user.id}` })
        } catch (error) {
            next(error);
        }
    }

    static async deleteProduct(req, res, next) {
        try {
            const { id } = +req.params;
            await Product.destroy({ where: { id } });
            res.status(200).json({ message: `Product with id ${id} has been deleted` });
        } catch (error) {
            next(error);
        }
    }

}
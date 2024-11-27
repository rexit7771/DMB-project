const productRouter = require('express').Router();
const ProductController = require('../controllers/ProductController');

productRouter.get("/product", ProductController.getAllProduct);
productRouter.post("/product", ProductController.newProduct);
productRouter.get("/product/:id", ProductController.getProduct);
productRouter.put("/product/:id", ProductController.editProduct);
productRouter.delete("/product/:id", ProductController.deleteProduct);

module.exports = productRouter;
const productRouter = require('express').Router();
const ProductController = require('../controllers/ProductController');
const { authorization, isAdmin } = require('../middlewares/authorization');

productRouter.get("/product", ProductController.getAllProduct);
productRouter.post("/product", ProductController.newProduct);
productRouter.get("/product/:id", ProductController.getProduct);
productRouter.put("/product/:id", authorization, ProductController.editProduct);
productRouter.patch("/product/:id", isAdmin, ProductController.editProduct);
productRouter.delete("/product/:id", ProductController.deleteProduct);

module.exports = productRouter;
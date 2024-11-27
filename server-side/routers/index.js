const express = require('express')
const app = express();
const router = express.Router();
const blogRouter = require('./blog');
const productRouter = require('./product');
const userRouter = require('./user');
const errorHandler = require('../middlewares/errorHandler');

router.use(userRouter);
router.use(productRouter);
router.use(blogRouter);

module.exports = router
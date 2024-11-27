const express = require('express')
const app = express();
const router = express.Router();
const blogRouter = require('./blog');
const productRouter = require('./product');
const userRouter = require('./user');
const authentication = require('../middlewares/authentication');

router.use(userRouter);
router.use(authentication);
router.use(productRouter);
router.use(blogRouter);

module.exports = router
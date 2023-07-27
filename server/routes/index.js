/**
* App routes definitions.
*/
'use strict';

let express = require('express');
let router = express.Router();
let authMiddleware = require('../infrastructure/authentication-middleware')

const productsController = require('../controllers/productsController');
const loginController = require('../controllers/loginController');
const commonRequestWrapper = require('../infrastructure/common-request-wrapper');

// To confirm setup only.
router.get('/api/products/', authMiddleware, commonRequestWrapper(productsController.listProducts));
router.get('/api/products/search', commonRequestWrapper(productsController.searchProduct));
router.get('/api/products/:id', authMiddleware, commonRequestWrapper(productsController.getProduct));
router.post('/api/products', authMiddleware, commonRequestWrapper(productsController.addProduct));
router.patch('/api/products/:id', authMiddleware, commonRequestWrapper(productsController.updateProduct));
router.delete('/api/products/:id', authMiddleware, commonRequestWrapper(productsController.deleteProduct));

router.post('/api/login', loginController.authenticate)

module.exports = router;
/**
* App routes definitions.
*/
'use strict';

let express = require('express');
let router = express.Router();
let authMiddleware = require('../security/authentication-middleware')

const productsController = require('../controllers/productsController');
const loginController = require('../controllers/loginController');

// To confirm setup only.
router.get('/api/products', authMiddleware, productsController.listProducts);
router.post('/api/products', authMiddleware, productsController.addProduct);
router.patch('/api/products/:id', authMiddleware, productsController.updateProduct);
router.delete('/api/products/:id', authMiddleware, productsController.deleteProduct);

router.get('/api/products/search', productsController.searchProduct);

router.post('/api/login', loginController.authenticate)

module.exports = router;
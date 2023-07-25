/**
* App routes definitions.
*/
'use strict';

let express = require('express');
let router = express.Router();

const productsController = require('../controllers/productsController')

// To confirm setup only.
router.get('/api/products', productsController.listProducts);
router.post('/api/products', productsController.addProduct);
router.patch('/api/products/:id', productsController.updateProduct);
router.delete('/api/products/:id', productsController.deleteProduct);

router.get('/api/products/search', productsController.searchProduct);

module.exports = router;
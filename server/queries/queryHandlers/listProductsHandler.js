const Product = require('../../models/product')

module.exports = (filter) => {
    return Product.find(filter);
}
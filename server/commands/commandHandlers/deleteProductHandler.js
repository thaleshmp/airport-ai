const Product = require('../../models/product')

module.exports = async (id) => {
    var product = await Product.findByIdAndDelete(id);

    if (!product) {
        throw { error: 'Product not found', code: 'NOT_FOUND' }
    }
}
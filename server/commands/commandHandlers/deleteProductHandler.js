const { NotFoundException } = require('../../exceptions/custom-exceptions');
const Product = require('../../models/product')

module.exports = async (id) => {
    var product = await Product.findByIdAndDelete(id);

    if (!product) {
        throw new NotFoundException({ message: 'Product not found', code: 'NOT_FOUND' })
    }
}
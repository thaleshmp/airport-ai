const Product = require('../../models/product')

module.exports = async (id, product) => {
    const updatedEntity = await Product.findByIdAndUpdate(id, product, {
        new: true,
        runValidators: true
    });

    if (!updatedEntity) {
        throw { error: 'Product not found', code: 'NOT_FOUND' }
    }

    return updatedEntity;
};
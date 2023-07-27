const Product = require('../../models/product')

module.exports = (id) => new Promise((res, rej) => {
    Product.findById(id, (err, document) => {
        if (err) {
            return rej(err);
        }

        return res(document);
    })
})
const Product = require('../../models/product')

module.exports = (filter) => new Promise((res, rej) => {
    Product.find(filter, (err, documents) => {
        if (err) {
            console.error('Error fetching documents: ', err);
        }

        return res(documents);
    })
})
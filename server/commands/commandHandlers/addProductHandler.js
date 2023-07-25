const Product = require('../../models/product')

module.exports = (product) => new Promise((res, rej) => {
    const newProduct = new Product({
        description: product.description,
        airportId: product.airportId,
        location: product.location,
        foundBy: product.foundBy,
        additionalInfo: product.additionalInfo,
        status: 'pending',
        lostDate: product.lostDate,
        features: product.features,
        dateCreated: Date.now()
    });

    newProduct.save().then(result => {
        return res(result)
    })
})
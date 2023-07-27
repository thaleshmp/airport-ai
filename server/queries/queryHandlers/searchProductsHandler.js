const Product = require('../../models/product')

module.exports = (filter) => new Promise((res, rej) => {
    const keywords = filter.term.toLowerCase().split(' ');

    const regex = new RegExp(keywords.join('|'), 'i');

    var query = { features: { $elemMatch: { value: { $regex: regex } } } }

    if (filter.location) {
        query.location = { $regex: new RegExp(filter.location, 'i'), $options: 'i' }
    }
    if (filter.lostDate) {
        query.lostDate = { $gt: filter.lostDate } 
    }

    Product.find(query, (err, documents) => {
        if (err) {
            console.error('Error fetching documents: ', err);
        }

        return res(documents);
    })
})
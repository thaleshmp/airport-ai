const { getProductHandler, listProductsHandler, searchProductsHandler } = require('../queries')
const { addProductHandler, updateProductHandler, deleteProductHandler } = require('../commands');
const { BusinessException } = require('../exceptions/custom-exceptions');

module.exports = {
    listProducts: async (req, res) => {
        var filter = {};

        if (req.query.status) {
            filter.status = req.query.status
        }

        var products = await listProductsHandler(filter);

        return res.status(200).send(products);
    },

    getProduct: async (req, res) => {
        var product = await getProductHandler(req.params.id);

        return res.status(200).send(product);
    },

    addProduct: async (req, res) => {
        const product = {
            description: req.body.description,
            airportId: req.user.airportId,
            location: req.body.location,
            foundBy: req.body.foundBy,
            ownerInfo: req.body.ownerInfo,
            lostDate: req.body.lostDate,
            features: req.body.features,
            dateCreated: Date.now(),
        }

        await addProductHandler(product);

        return res.status(201).send();
    },

    updateProduct: async (req, res) => {
        const id = req.params.id;

        const updateData = {
            description: req.body.description,
            airportId: req.user.airportId,
            location: req.body.location,
            foundBy: req.body.foundBy,
            ownerInfo: req.body.ownerInfo,
            lostDate: req.body.lostDate,
            features: req.body.features,
            status: req.body.status
        }

        await updateProductHandler(id, updateData);

        return res.status(200).send();
    },

    deleteProduct: async (req, res) => {
        const id = req.params.id;

        await deleteProductHandler(id);

        return res.status(200).send();
    },

    searchProduct: async (req, res) => {
        const term = req.query.term;
        const location = req.query.location;
        const lostDate = req.query.lostDate;

        if (!term) {
            throw new BusinessException({ message: 'Field term is required', code: 'BAD_REQUEST' })
        }

        var filter = { term, location, lostDate, status: 'pending' };

        var products = await searchProductsHandler(filter);

        return res.status(200).send(products);
    }
}
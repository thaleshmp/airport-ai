const { BusinessException, NotFoundException } = require("../exceptions/custom-exceptions");

module.exports = (err, req, res, next) => {
    console.log(err)
    switch (true) {
        case err instanceof BusinessException:
            res.status(400).send(err.errors)
            break;
        case err instanceof NotFoundException:
            res.status(404).send(err.errors)
            break;
        default:
            res.status(500).send({ errors: [{ message: 'Internal Server Error', code: 'GEN_FAILURE' }] });
            break;
    }
}
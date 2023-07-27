const { BusinessException, NotFoundException, UnauthorizedException } = require("../exceptions/custom-exceptions");

module.exports = (err, req, res, next) => {
    switch (true) {
        case err instanceof BusinessException:
            res.status(400).send(err.errors)
            break;
        case err instanceof NotFoundException:
            res.status(404).send(err.errors)
            break;
        case err instanceof UnauthorizedException:
            res.status(401).send(err.errors)
            break;
        default:
            console.error(err)
            
            res.status(500).send({ errors: [{ message: 'Internal Server Error', code: 'GEN_FAILURE' }] });
            break;
    }
}
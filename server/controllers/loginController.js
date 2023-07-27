const authenticationService = require('../security/authentication-service')

module.exports = {
    authenticate: async (req, res) => {
        var credential = { username: req.body.username, password: req.body.password }

        var user = await authenticationService.authenticate(credential);

        return res.status(200).send(user);
    }
}
const Agent = require('./../models/agent')
const jwt = require('jsonwebtoken')

module.exports = {
    authenticate: async (credential) => {
        var user = await Agent.findOne({ username: credential.username, password: credential.password })

        if(!user){
            throw { error: 'Invalid credentials' }
        }

        const token = jwt.sign({ userId: user._id, username: user.username, airportId: user.airportId }, 'somehash', {
            expiresIn: '1h'
        });

        return { token };
    }
}
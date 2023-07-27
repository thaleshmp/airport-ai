const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    airportId: { type: mongoose.Schema.Types.ObjectId, ref: 'Airport' },
    active: { type: Boolean, required: true, default: true },
});

const Agent = mongoose.model('Agent', agentSchema);

module.exports = Agent;
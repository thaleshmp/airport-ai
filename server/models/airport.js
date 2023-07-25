const mongoose = require('mongoose');

const airportSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now },
});

const Airport = mongoose.model('Airport', airportSchema);

module.exports = Airport;
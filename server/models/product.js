const mongoose = require('mongoose');

const statusEnum = ['pending', 'completed']

const keyValueSchema = new mongoose.Schema({
    key: String,
    value: mongoose.Schema.Types.Mixed
}, { _id: false });

const ownerInfoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String },
    phoneNumber: { type: String }
}, { _id: false });

const productSchema = new mongoose.Schema({
    description: { type: String, required: true },
    airportId: { type: mongoose.Schema.Types.ObjectId, ref: 'Airport' },
    location: { type: String },
    foundBy: { type: String },
    ownerInfo: ownerInfoSchema,
    status: { type: String, enum: statusEnum, default: 'pending', required: true },
    features: [keyValueSchema],
    lostDate: { type: Date, default: Date.now },
    dateCreated: { type: Date, default: Date.now },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
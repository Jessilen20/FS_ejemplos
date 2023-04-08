const mg = require('mongoose');

const product = mg.model( "product", mg.Schema({
    title: { type: String },
    price: { type: Number },
    description: { type: String}
}, { timestamps: true }));

module.exports = product;

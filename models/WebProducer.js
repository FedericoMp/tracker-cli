const mongoose = require('mongoose');

// web producer Schema
const webpSchema = mongoose.Schema({
    webpName: { type: String, unique: true}, 
});

// exports schemas
module.exports = mongoose.model('WebProducer', webpSchema);
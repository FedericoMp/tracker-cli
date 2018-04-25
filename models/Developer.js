const mongoose = require('mongoose');

//  dev Schema
const devSchema = mongoose.Schema({
    devName: { type: String, unique: true}, 
});

// exports schemas
module.exports = mongoose.model('Developer', devSchema);
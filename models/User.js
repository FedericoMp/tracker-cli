const mongoose = require('mongoose');

//  dev Schema
const userSchema = mongoose.Schema({
    userName: { type: String, unique: true}, 
    userRol: { type: String, unique: true}, 
});

// exports schemas
module.exports = mongoose.model('User', userSchema);
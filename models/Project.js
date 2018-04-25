const mongoose = require('mongoose');

// Import methods
const {devSchema} = require('./Developer');
const {webpSchema} = require('./WebProducer');


// Project Schema
const projectSchema = mongoose.Schema({
    projectName: { type: String, unique: true}, 
    status: { type: String}, 
    time: { type: String},
    devAssign: {type: mongoose.Schema.Types.ObjectId, ref: 'devSchema'}, 
    webpAssign:  {type: mongoose.Schema.Types.ObjectId, ref: 'webpSchema'}
});

// exports schemas
module.exports = mongoose.model('Project', projectSchema);
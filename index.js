// Interact with mongoose
const mongoose = require('mongoose');

// Mao global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to DB
const db = mongoose.connect('mongodb://localhost:27017/trackercli');

// -------------------------------------------------------------------

// Import models
const Developer = require('./models/Developer');
const WebProducer = require('./models/WebProducer');
const Project = require('./models/Project');

// Add dev, webp, project
const addDeveloper = (dev) => {
    Developer.create(dev).then(dev => {
        console.info('New Developer Added');
        mongoose.connection.close();
    });
}

const addWproducer = (webp) => {
    WebProducer.create(webp).then(webp => {
        console.info('New Web Producer Added');
        mongoose.connection.close();
    });
}

const addProject = (project) => {
    Project.create(project).then(project => {
        console.info('New Web Project Added');
        mongoose.connection.close();
    });
}

// -------------------------------------------------------------------

// Find dev, webp, project
const findDeveloper = (name) => {
    // Make case insensitive - find lower case or upper case text
    const search = new RegExp(name, 'i');
    // $or: search for first name or last name
    Developer.find({devName: search})
        .then(dev => {
            console.info(dev);
            console.info(`${dev.length} matches`);
            mongoose.connection.close();
        });
}

const findWebproducer = (name) => {
    // Make case insensitive - find lower case or upper case text
    const search = new RegExp(name, 'i');
    // $or: search for first name or last name
    WebProducer.find({webpName: search})
        .then(webp => {
            console.info(webp);
            console.info(`${webp.length} matches`);
            mongoose.connection.close();
        });
}

const findProject = (name) => {
    // Make case insensitive - find lower case or upper case text
    const search = new RegExp(name, 'i');
    // $or: search for first name or last name
    Project.find({projectName: search})
        .then(project => {
            console.info(project);
            console.info(`${project.length} matches`);
            mongoose.connection.close();
        });
}
// -------------------------------------------------------------------

// Update dev, webp, project
const updateDev = (_id, dev) => {
    Developer.update({_id},dev)
        .then(dev => {
            console.info('Developer Updated');
            mongoose.connection.close();
        });
}

// -------------------------------------------------------------------

// Remove dev, webp, project
const removeDev = (_id) => {
    Developer.remove({_id})
        .then(dev => {
            console.info('Developer Removed');
            mongoose.connection.close();
        });
}


// -------------------------------------------------------------------

// List dev, webp, project
const listDevs = () => {
    Developer.find()
        .then(dev => {
            console.info(dev);
            console.info(`${dev.length} dev`);
            mongoose.connection.close();
        });
}


// -------------------------------------------------------------------

// Export All Methods
module.exports = {
    addDeveloper,
    addWproducer,
    addProject,
    findDeveloper,
    findWebproducer,
    findProject,
    updateDev,
    removeDev,
    listDevs
}
#!/usr/bin/env node

// solution for node.js command-line interfaces
const program = require('commander');

// require inquirer
const { prompt } = require('inquirer');

// Import methods
const{
    addDeveloper,
    addWproducer,
    addProject,
    findDeveloper,
    findWebproducer,
    findProject,
    updateDev,
    removeDev,
    listDevs
} = require('./index');

// -------------------------------------------------------------------

// Prompt Questions
const devData = [
    {
        type: 'input',
        name: 'devName',
        message: 'Developer name: '
    }
];

const wprodData = [
    {
        type: 'input',
        name: 'webpName',
        message: 'Web Producer name: '
    }
];

const projectData = [
    {
        type: 'input',
        name: 'projectName',
        message: 'Project name: '
    }
];
// -------------------------------------------------------------------

// Data app
program
    .version('1.0.0')
    .description('Tracker CLI Management System')

// -------------------------------------------------------------------

// Create dev, wprod, proj

// no enquirer
// program
//     .command('new-dev <devName>')
//     .alias('n-dev')
//     .description('Add Developer')
//     .action((devName) => {
//         addDeveloper({devName});
//     });

//  with Enquirer :) 
program
    .command('new-dev')
    .alias('n-dev')
    .description('Add Developer')
    .action(() => {
        prompt(devData).then(answers => addDeveloper(answers));
    });

//  no enquirer     
// program
//     .command('new-webp <webpName>')
//     .alias('n-wp')
//     .description('Add Web Producer')
//     .action((webpName) => {
//         addWproducer({webpName});
//     });

//  with Enquirer :) 
program
    .command('new-webp')
    .alias('n-wp')
    .description('Add Web Producer')
    .action(() => {
        prompt(wprodData).then(answers => addWproducer(answers));
    });

//  no enquirer   
// program
//     .command('new-pro <projectName>')
//     .alias('n-pro')
//     .description('Add new Project')
//     .action((projectName) => {
//         addProject({projectName});
//     });

//  with Enquirer :) 
program
    .command('new-pro')
    .alias('n-pro')
    .description('Add new Project')
    .action(() => {
        prompt(projectData).then(answers => addProject(answers));
    });


// -------------------------------------------------------------------

// Find dev, wprod, proj
program
    .command('busca-dev <devName>')
    .alias('b-dev')
    .description('Find Developer')
    .action(devName => findDeveloper(devName));

program
    .command('busca-webp <webpName>')
    .alias('b-wp')
    .description('Find Web Producer')
    .action(webpName => findWebproducer(webpName));

program
    .command('busca-pro <projectName>')
    .alias('b-pro')
    .description('Find Project')
    .action(projectName => findProject(projectName));

// -------------------------------------------------------------------

//  Update data with Enquirer :) 
program
    .command('update-dev <_id>')
    .alias('u-dev')
    .description('Update Developer')
    .action((_id) => {
        prompt(devData).then(answers => updateDev(_id, answers));
    });

// -------------------------------------------------------------------

//  Remove data with Enquirer :) 
program
    .command('remove-dev <_id>')
    .alias('r-dev')
    .description('Removed Developer')
    .action(_id => removeDev(_id));

// -------------------------------------------------------------------

//  List data with Enquirer :) 
program
    .command('list-dev')
    .alias('l-dev')
    .description('Developer List')
    .action(() => listDevs());

// -------------------------------------------------------------------

program.on('--help', function(){
  console.log('\n  To test on local:');
  console.log('    node commands.js new-dev');
  console.log('    node commands.js n-dev');
  console.log('');
  console.log('  To test out local:');
  console.log('    tracker new-dev');
  console.log('    tracker n-dev');
  console.log('');
});

// The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched
program.parse(process.argv);
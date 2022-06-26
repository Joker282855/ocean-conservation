// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkddown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title for your project'
},
{
    type: 'input',
    name: 'reason',
    message: 'Why did you begin this project'
},
{
    type: 'input',
    name: 'purpose',
    message: 'What is the purpose behind your project'
},
{
    type: 'input',
    name: 'goal',
    message: 'What goals do you hope to reach with your project'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

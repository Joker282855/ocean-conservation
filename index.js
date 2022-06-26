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
},
{
    type: 'input',
    name: 'intention',
    message: 'How do you want other people to use your project'
},
{
    type: 'input',
    name: 'application',
    message: 'How do you want other poeple to use the application for the readme file'
},
{
    type: 'input',
    name: 'computer',
    message: 'How does another person use this code on their own computer'
},
{
    type: 'list',
    name: 'license',
    message: 'What license does your readme file generator use? (Choose from the following list)',
    choices: ['MIT', 'GNU', 'Apache', 'ISC']
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

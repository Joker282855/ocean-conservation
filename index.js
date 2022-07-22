// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkddown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title for your project?'
},
{
    type: 'input',
    name: 'reason',
    message: 'Why did you begin this project?'
},
{
    type: 'input',
    name: 'purpose',
    message: 'What is the purpose behind your project?'
},
{
    type: 'input',
    name: 'intention',
    message: 'How do you want other people to use your project?'
},
{
    type: 'input',
    name: 'software',
    message: 'What software do people need to download to install the code onto their computer?'
},
{
    type: 'input',
    name: 'computer',
    message: 'How does another person install this code on their own computer?'
},
{
    type: 'input',
    name: 'education',
    message: 'How should your website be used by other people?'
},
{
    type: 'input',
    name: 'file',
    message: 'How should others use the code to generate their own README files?'
},
{
    type: 'list',
    name: 'license',
    message: 'What license does your readme file generator use? (Choose from the following list)',
    choices: ['MIT', 'GNU', 'Apache', 'ISC']
},
{
    type: 'input',
    name: 'contribution',
    message: 'How should others make contributions to your website?'
},
{
    type: 'input',
    name: 'application',
    message: 'How should others share your readme application with others?'
},
{
    type: 'input',
    name: 'tested',
    message: 'What tests did you do to make sure the readme file was generated correctly?'
},
{
    type: 'input',
    name: 'profile',
    message: 'What is your github username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address'
},
{
    type: 'input',
    name: 'phone',
    message: 'What is your phone number'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
            if (err) {
                return console.log(err)
            } else {
                console.log('Readme created')
            }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile('README.md', generateMarkddown(data));
            console.log(data);
        })
}
// Function call to initialize app
init();

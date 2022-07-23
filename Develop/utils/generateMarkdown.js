// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Badge: ${data.license}

  # Title: ${data.title}

  # Description:
  ${data.reason}
  ${data.intention}

  # Table of Contents:
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[Questions](#questions)

  # Installation:
  The steps that need to be taken to install this README generator onto your computer are listed below:
  ${data.software}
  ${data.computer}
  
  # Usage
  ${data.education}
  ${data.file}

  # License
  The license used with this application is ${data.license}

  # Contributing
  To contribute to my webiste and the application follow the advice listed below:
  ${data.contribution}
  ${data.application}

  # Tests
  ${data.tested}

  # Works Shown
  The link to my github profile is https://github.com/${data.profile}

  # Contact
  I am usually busy working from 9:00 a,m. to 5:00 p.m. and reserve two hours after work to check if someone has reached out to me. The different ways a person can reach me will be through my email or phone number.

`;
}

module.exports = generateMarkdown;

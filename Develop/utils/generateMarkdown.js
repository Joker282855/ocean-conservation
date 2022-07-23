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
  ${data.purpose}
  ${data.intention}

  # Table of Contents:
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
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

  # Questions
  The link to my github profile is https://github.com/${data.profile}.
  My email address is ${data.email}.
  My phone number is ${data.phone}.

  I usally work my professional job from 9:00 a.m. to 5:00 p.m. I would be free anytime after that if you need to contact me. I am happy to collaborate with anyone that wants to help me impprove my website and my code.
  Learning from others Is what helps a person grow and become a better coder overall. I look forward to colloboarating with other people soon. 

`;
}

module.exports = generateMarkdown;

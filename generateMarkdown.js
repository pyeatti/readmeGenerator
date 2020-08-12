function generateMarkdown(data) {
  return `
# ${data.projectTitle}
    
## Description
 ${data.projectDescription}
    
## Table of Contents
* [Installation](##Installation)
* [Usage](##Usage)
* [License](##License)
* [Contribution](##Contribution) 
* [Testing Instructions](##Testing-Instructions)
* [Questions](##Questions)
 
## Installation
${data.projectInstall}

## Usage
${data.projectUsage}

## License
${data.projectLicense}

## Contribution
${data.projectContribution}

## Testing Instructions
${data.userInstructions}

## Questions
Please send any questions to:
* GitHub Username: ${data.username}
* Email: ${data.userEmail}
`;
}

module.exports = generateMarkdown;

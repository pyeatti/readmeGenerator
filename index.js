const generateMarkdown = require("./generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

let questions = [
  {
    type: "input",
    message: "Please name your project!",
    name: "projectTitle",
  },
  {
    type: "input",
    message: "Please put a description of your project!",
    name: "projectDescription",
  },
  {
    type: "input",
    message: "Please give any neccessary installation instructions!",
    name: "projectInstall",
  },
  {
    type: "input",
    message: "Any usage instructions?",
    name: "projectUsage",
  },
  {
    type: "list",
    message: "Which license does this project use?",
    choices: [
      "MIT",
      "Mozilla Public",
      "Creative Commons",
      "ISC",
      "Microsoft Public License",
    ],
    name: "projectLicense",
  },
  {
    type: "input",
    message: "Please include any guidelines for contributing to this project!",
    name: "projectContribution",
  },
  {
    type: "input",
    message: "Any further instructions for this project?",
    name: "userInstructions",
  },
  {
    type: "input",
    message: "Enter your username for GitHub",
    name: "username",
  },
  {
    type: "input",
    message: "Enter your email",
    name: "userEmail",
  },
];

function init() {
  inquirer.prompt(questions).then((data) => {
    fs.writeFile("README.md", generateMarkdown(data), function (err) {
      if (err) {
        console.log(err);
      }
    });
  });
}

init();

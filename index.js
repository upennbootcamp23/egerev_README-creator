// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user input
const questions = [
    
    {   name: `application_name`,
        message: `Project Title`,
        type: `input`,
    },

   
    {   name: `description`,
        message: `Please provide a description of the application: `,
        type: `input`,
    },

     
    {   name: `installation`,
        message: `What are your installation instructions?`,
        type: `input`,
    },

    {   name: `usage`,
        message: `How are you going to use the application?`,
        type: `input`,
    },

    {   name: `license`,
    message: `What license does the application fall into?`,
    type: `list`,
    choices: [
        'None',
        'Apache License 2.0',
        'Boost Software License 1.0',
        'BSD 3-Clause License',
        'BSD 2-Clause License',
        'Attribution-NonCommmercial-ShareAlike 4.0 International',
        'Eclipse Public License 1.0',
        'GNU GPL v3',
        'GNU GPL v2',
        'GNU AGPL v3',
        'GNU LGPL v3',
        'The MIT License',
        'Mozilla Public License 2.0',
        'SIL Open Font License 1.1',
        'The zlib/libpng License'
    ]
},

    {   name: `help`,
        message: `Who helped you create the application?`,
        type: `input`,
    },

    {   name: `tests`,
        message: `Provide test instructions for the application`,
        type: `input`,
    },

    {   name: `github`,
        message: `Enter Github Username`,
        type: `input`,
},

{   name: `email`,
    message: `Enter your email`,
    type: `input`,
}

];

//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log("EXAMPLE.md created!");
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (answers) {        
        var sMarkdown = generateMarkdown(answers);
        var fileName  = "EXAMPLE.md";
        writeToFile(fileName, sMarkdown);

    })
    .catch((err) => {
        console.log(err);
    });
}

// Function call to initialize app
init();

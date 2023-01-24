// Include packages needed for this application
const inquirer= require('inquirer');
const fs= require('fs');
const generateReadMe= ({title,description,installation,usage,credits,license})=>{
    return ` # ${title}

    ## Desription
    ${description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

    ## Installation
    ${installation}
    
    ## Usage
    ${usage}

    To add a screenshot, use the relative filepath and add it here using the following syntax:
    ![alt text](images/screenshot.png)

    ## Credits
    ${credits}

    ## License
    ${license}
    `
}

// Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Briefly describe the what, why, and how of your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide any instructions and examples for use. Enter N/A if not applicable.',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List any collaborators, if any. Enter N/A if not applicable.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'If there were collaborators, please list their GitHub profiles. Enter N/A if not applicable.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project',
            choices: ['None','Apache License 2.0','GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'MIT', 'ISC License', 'Mozilla Public License 2.0', 'Boost Software License 1.0'],
        },
    ])
    .then((response)=>
    // Create a function to write README file
    fs.writeFile('UserREADME.md', generateReadMe(response), (err)=> (err ? console.error(err) : console.log('Generated professional README!'))
    )
);
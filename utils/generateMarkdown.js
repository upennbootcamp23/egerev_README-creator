const licenseDetails  = require('./detailsOfLicenses.js');


// Function that returns a license badge based on which license is passed in
// If there is no license, an empty string is returned
function renderLicenseBadge(license) {
  if(license == "None") {
    return " ";
  }

  var licenseResult = licenseDetails.filter(licenseDetails => licenseDetails.name === license);
 return licenseResult[0].badge;

}

// Function that returns the license link
// If there is no license, an empty string is returned
function renderLicenseLink(license) {
  if(license == "None") {
    return " ";
  }
  var licenseLinkResult = licenseDetails.filter(licenseDetails => licenseDetails.name === license);
  return licenseLinkResult[0].link;
}

// Function that returns the license section of README
// If there is no license, an empty string is returned
function renderLicenseSection(license) {
  if(license == "None") {
    return " ";
  }

  return `
  ## License
  This application is under the ${license}(${renderLicenseLink(license)}) license. To learn about license rights and limitations, click the link. Thank you.`
}

// Function to generate markdown for README
function generateMarkdown(response) {
  return `
 
  > ${renderLicenseBadge(response.license)}

  ## Project Title
  >  ${response.application_name}

  ## Description 
  > ${response.description}

  ## Table of Contents
  * [Installation](#installation) 
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  >  ${response.installation}  

  ## Usage
  >  ${response.usage}

  >  ${renderLicenseSection(response.license)}

  ## Contribute 
  >  ${response.help}

  ## Tests
  >  ${response.tests}

  ## Questions 
  > [My Github Portfolio](https://github.com/${response.github}) <br>
  > [My Email](${response.email})

  `;
}

module.exports = generateMarkdown;

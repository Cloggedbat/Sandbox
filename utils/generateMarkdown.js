// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
          

  ## Table of Contents
  *[description](#description)
  *[Initallation instruction](#installation)
  *[User information](#usage)
  *[Licence](#licence)
  *[Contributors](#contributors)


  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.installation}

  ## Usage Content
  ${data.contents}

  ## Contributors
  ${data.contributors}
  
  ## Users
  ${data.users}
`
}

module.exports = generateMarkdown;

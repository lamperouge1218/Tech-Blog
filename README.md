# Model-View-Controller (MVC): Tech Blog

![License Badge](https://img.shields.io/badge/license-MIT-blue)

## Description 

This application functions as a simple blog wherein the user can log in, make/edit/delete posts, see other user's posts, and comment on them.   

Here is a screenshot of the app: 

![Tech Blog Screenshot]()

Here is a link to the Heroku deployment: [Tech Blog Heroku Link]()

## Table of Contents

-- [Installation](#installation)

-- [Usage](#usage)

-- [License](#license)

-- [Contributing](#contributing)

-- [Tests](#tests)

-- [Questions](#questions)

## Installation
  
To install necessary dependencies, run the following command:

    npm i

Additionally, mySQL is required as a separate install. To set up database and seed it, run the following command in your mySQL shell:

    source db/schema.sql
    
Exit the mySQL shell and enter the following command in your terminal to seed the database:

    node seeds/index.js

## Usage

Run the application with the following command:

    node server.js

and open by navigating to the Heroku link listed above. 

Once the server is up, the user should create and account and log in to the site. Once done, the user can begin posting. Posts can be edited and deleted by the poster and other posts from the dashboard can be commented. The user cannot begin posting without having logged in first. 

## License

This project is protected under the [MIT](https://choosealicense.com/licenses/mit/) license. (2021) (Phil Bohn)

## Contributing

N/A

## Tests

N/A

## Questions

If there any questions regarding this project, I can be contacted in the following places:

GitHub: [@lamperouge1218](https://github.com/lamperouge1218)

Email: philbohn1791@gmail.com

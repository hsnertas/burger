# Node Express Mysql Full Stack Burger App
  ![GitHub top language](https://img.shields.io/github/languages/top/hsnertas/burger?logo=GitHub&logoColor=blue)
  ![GitHub last commit](https://img.shields.io/github/last-commit/hsnertas/burger?logo=github&logoColor=green) 
  ![GitHub repo size](https://img.shields.io/github/repo-size/hsnertas/burger?logo=github&logoColor=blue) 


 ## Description 
  In this assignment, I created a burger logger with MySQL, Node, Express and a homemade ORM (yum!). 

-  [Eat-Da-Burger! - Git Hub](https://github.com/hsnertas/burger)
-  [Eat-Da-Burger! - Heoku](https://nameless-falls-74805.herokuapp.com/)
-  [Eat-Da-Burger! - Demo Video](https://drive.google.com/file/d/1uc1dKYdCTuMT66LHSSg9MbzY3iAoqON9/view)

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Directory](#Directory)

  ## Installation

1. Create a GitHub repo called `burger` and clone it to your computer.

2. Make a package.json file by running `npm init` from the command line.

3. Install the Express npm package: `npm install express`.

4. Install MySQL npm package: `npm install mysql`.

## Usage

* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour` button. When the user clicks it, the burger will move to the right side of the page.

* Each burger on the right side of the page will have a `Delete Button`.  When the user clicks delete, it will be removed from the db and the page.

## Directory 
All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│       └── js
│           └── burgers.js
│   └── index.html   
│
├── server.js
```

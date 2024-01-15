# cbmen

cbmen- Config-Backend with MongoDB, Express and NodeJS, is an npm package that helps you kickstart your backend project with a well-organized structure. It also provides the flexibility to install important additional libraries, saving you time and effort.  

Github repo: https://github.com/navik11/cbmen

## Features

- Initiate a backend project with a predefined project structure.
- Choose and install additional libraries like multer, cloudinary, jsonwebtoken, bcrypt, etc.
- Save time on setting up the initial project configuration.

## Uses

### Installation

To use cbmen, you need to have Node.js, npm and bash installed on your machine.

```bash
npm i -D cbmen && npx cbmen
```
Answer the project setup questionaire, cbmen will automatically setup the project for you.  

Now, you are ready to take off!

## Project structure

project-root  
├── node_modules  
├── public   
│&emsp;&emsp;&emsp;└── temp  
├── src  
│&emsp;&emsp;&emsp;├── controllers  
│&emsp;&emsp;&emsp;├── db  
│&emsp;&emsp;&emsp;│&emsp;&emsp;&emsp;└── index.js  
│&emsp;&emsp;&emsp;├── middlewares  
│&emsp;&emsp;&emsp;├── models  
│&emsp;&emsp;&emsp;├── routes  
│&emsp;&emsp;&emsp;├── utils  
│&emsp;&emsp;&emsp;│&emsp;&emsp;&emsp;├── ApiErrorRes.js  
│&emsp;&emsp;&emsp;│&emsp;&emsp;&emsp;└── asyncHandler.js  
│&emsp;&emsp;&emsp;├── app.js  
│&emsp;&emsp;&emsp;├── constants.js  
│&emsp;&emsp;&emsp;└──  index.js  
├── .env   
├── .gitignore  
├── .prettierignore  
├── .prettierrc   
├── package.json  
└──  README.md  


## Feedback and Support

For any issues, feedback, or support, please contact me  
Sachida, navik09.me@gmail.com | sachidanan22@iitk.ac.in
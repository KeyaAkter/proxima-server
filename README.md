# Proxima - A Project Management Website

This is a sleek project management website built using the MERN stack. With this website, users can create, update, and delete their own projects with ease. This app is providing secure authentication and a user-friendly interface for efficient project tracking and management.

## Features

Proxima comes packed with a variety of useful features, including:

- User sign-up and login with JSON Web Tokens (JWT) for secure access
- Create, read, update, and delete projects
- A project contain a title, required technologies, budget, duration, manager name and required developers
- All Projects displays all of the added projects in a clean, organized manner
- View user account information
- Filter projects and tasks by projects updated date

## Tools Used

- Node.js - JavaScript runtime environment that runs on the server.
- Express - Fast, minimalist web framework for Node.js.
- MongoDB - NoSQL database that uses a document-oriented data model.
- JWT - JSON Web Tokens for secure authentication and authorization.
- React - JavaScript library for building user interfaces.
- Context API - React's Context API for state management.
- Tailwind - CSS framework that allows for easy customization and rapid development.

## Installation

1. Clone the client repository using git clone https://github.com/KeyaAkter/proxima-client
2. Clone the server repository using git clone https://github.com/KeyaAkter/proxima-server
3. Install the required dependencies by running npm install or npm i in both the client and server directories.
4. Create a .env file in the root directory of server and add the following variables:
   MONGO_URI: the MongoDB connection string
   SECRET: a secret string for JWT authentication
5. Create a .env file in the root directory of client and add the following variable:
   REACT_APP_BASE_URL: for example http://localhost:4000

6. Start the backend server by running 'npm start'.
7. Start the backend server by running 'npm start'.

## Links

- [Live Demo](https://proxima-project.netlify.app/)
- [Front-End Repository](https://github.com/KeyaAkter/proxima-client)
- [Back-End Repository](https://github.com/KeyaAkter/proxima-server)

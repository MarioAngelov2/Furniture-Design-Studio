# Furniture Design Studio - Documentation
Welcome to Furniture Design Studio documentation. This document provides an overview of the app's functionality and technology stack.

## Live Demo - [Furniture_Design_Studio](https://verdant-pothos-9cdb4c.netlify.app/)

## Introduction

1. Getting started
2. Technology Stack
3. Folder Structure
4. Deployment

## Getting started

`Clone repo`

- Server `cd server` `npm i` `export NODE_ENV=development` `npm start`
- Client `cd client` `npm i` `npm run dev`

## Technology Stack

### Frontend
- `Vite`: Vite is a fast build tool that optimizes the development workflow. It offers rapid development, hot module replacement, and efficient builds.
- `React`: React is widely-used JavaScript library for building user interfaces. It enables us to create dynamic and interactive components.
- `Tailwindcss`: Tailwindcss provides a great syntax that allows us to write the `CSS` directly inside the `HTML` attributes, which leads to rapid and fast development process.
- `React-Scroll`
- `React-Icons`
- `React-Error-Boundary`

### Backend
- `Node.js`: Node.js is used to execute JavaScript on the server-side. It's an essential part of the development environment for building JavaScript-based applications.
- `npm(Node Package Manager)`: npm is a package manager for Node.js that allows us to install, manage, and update project dependencies.
- `Mongo DB`: Mongo DB is non relential database, where the data of the application is stored and retreived.
- `Dotenv`
- `Express`
- `Http-Errors`
- `Mongoose`
- `Cors`

## Folder Structure

### Frontend
- `src/`
The `src/` directory is the heart of the app. housing all the source code.

- `assets/`
In the `assets/` directory, you'll find static assets like images and logos, which are used across various parts of the app.

- `components/`
The `components/` directory holds reusable UI components. There components can be utilized in different sections of the app, pomoting code reusability and consistency.

- `api/`
The `api/` directory holds all the logic for fetching data from the server. It's separate folder from the UI components in order to keep separation of concerns and clean code.

- `utils/`
In the `utils/` folder are located utility functions and helper modules. Theese utillities encompass functionality such as data manipulation and other common.  

### Backend
- `index.js`
The `index.js` file is where the server is initialised and started.

- `src/`
The `src/` directory is the main folder which contains all the backend functionlity.

- `controllers/`
Inside `controllers/` is where the business logic of the application is located. It contains different requests methods. 

- `routes/`
The `routes/` folder is responsible to keep one route file which contains imported controllers and handling request for each controller.

- `models/`
Inside `models/` folder is located the schema and models for our database. It's esential part of the application because we can structure how the information will look like via those schemas. 


## Deployment
- The `Frontend` is build with `Vite` and deployed on `Netlify`
- The `Backend` is build and deployed via `Render`

## Screenshots 

<img src="public/../client/public/127.0.0.1_5173_%20(4).png">
<img width="400" src="public/../client/public/mobile%20(1).png">
<img width="400" src="public/../client/public/mobile%20(2).png">
<img width="400" src="public/../client/public/mobile%20(3).png">
<img width="400" src="public/../client/public/mobile%20(4).png">

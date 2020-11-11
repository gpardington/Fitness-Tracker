# Fitness Tracker
A full-stack application that allows the user to create, view, and track their different exercises in their daily workouts. This assignment showcases the use of MongoDB and NoSQL. 

## Table of Contents

- [Running Application](#running-application)
- [User Story](#user-story)
- [Development](#development)
- [Installation](#installation)
- [Technologies](#technologies)
- [Demo](#demo)
- [Contributors](#contributors)
- [Questions](#questions)
- [Copyright](#copyright)

## Running Application:

<https://limitless-savannah-82266.herokuapp.com/>

## User Story:

As a user, I want to be able to view, create, and track daily workouts.  
I want to be able to log multiple exercises in a workout on a given day.  
I should also be able to track the name, type, weight, sets, reps, and duration of an exercise.  
If the exercise is a cardio exercise, I should be able to track my distance traveled.
If the exercise is a resistance exercise, I should be able to track the total weight lifted. 

## Development:

The front-end files were povided, so I mostly worked on the following files: server.js, models/index.js, models/workout.js, routes/api.js, & routes/html.js.

After I created the server.js file and was able to connect to the server on port 3000, I started working on the routes. Once I was able to reach these pages on the localhost, I continued working on the models files to configure and connect to the database. Once this application was functioning properly on my local machine, I started polishing up the styling by adding more color, a background image, and a unique Google font. After that, I created the database in Mongo Atlas and then linked it to my Heroku account. Once that was finished, I pushed the application up to Heroku, and tested everything using the provided Heroku link.

## Installation:

To run this application locally, clone this repo into your local machine and run 'npm i' in the root file of the folder. This will install all of the neccesary dependencies. After everything is installed, type 'npm start' in your terminal to begin hosting locally. In your internet browser, type in 'http://localhost:3000/' into the url address bar to pull up the application. 

## Technologies:
- HTML
- CSS
- Bootstrap
- JavaScript
- NodeJS
- Express
- Mongoose
- MongoDB
- Morgan

## Demo:
![Demo](public/images/demo.gif?raw=true)

### Contributors:

- Grant Pardington
- Trilogy

![npm](https://img.shields.io/static/v1?label=license&message=MIT&color=blue)

### Questions:

If you have any questions, feel free to contact me:
 
[grant.pardington@gmail.com](mailto:grant.pardington@gmail.com)

[GitHub](https://github.com/gpardington) 

### CopyRight:

Grant Pardington 2020 &copy;
//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const db = require("./models");

//Defining PORT
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//MongoDB connection
var MONGOD_URI = process.env.MONGOD_URI ||  "mongodb://localhost/workouts";
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};

mongoose.connect(MONGOD_URI, options)


//Routing
app.use(require("./routes/html.js"));
app.use(require("./routes/api.js"));

//Listener
app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}!`);
});
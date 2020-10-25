//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const db = require("./models");

//Defining PORT
const PORT = process.env.PORT || 3000;
const app = express();

//Set up Morgan to log request
app.use(morgan("dev"));

//Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//MongoDB connection
var MONGOD_URI = process.env.MONGOD_URI ||  "mongodb://localhost/workout";
mongoose.connect(MONGOD_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
});

//Routing
require("./routes/html.js")(app);
require("./routes/api.js")(app);

//Listener
app.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}!`);
});
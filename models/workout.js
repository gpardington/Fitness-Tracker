const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = newSchema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for exercise"
    },
    value: {
        type: Number,
        required: "Enter an amount"
    },
    date: {
    type: Date,
    default: Date.now
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
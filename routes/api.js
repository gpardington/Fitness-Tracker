const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", function ({ body, params }, res) {
    db.Workout.updateOne({ _id: params.id }, { $push: { exercises: body } })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then((range) => {
            res.json(range);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: {
        type: String,
    },
    name: {
        type: String,
        trim: true,
    },
    duration: {
        type: Number,
        trim: true,
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    }

}); 

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
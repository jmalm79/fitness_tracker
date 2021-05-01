const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
        type: {
            type: String,
            required: "Exercise type is required",
            trim: true
        },
        name: {
            type: String,
            required: "Name is required",
            trim: true
        },
        duration: {
            type: Number, 
            required: "Duration is required"
        },
        weight: {
            type: Number,
            required: "Weight is required"
        }, 
        reps: {
            type: Number, 
            required: "Reps are required"
        }, 
        sets: {
            type: Number, 
            required: "Sets are required"
        }, 
        distance: {
            type: Number
        }
    }
]
}) 

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: date,
    default: date.now
  },

  exercise:[
    { 
        type: {
        type: string,
        trim: true,
        required:"Exercise Type" 
        },

        duration: {
            type: number,
            trim: true,
            required:"Exercise Time"
        },

        weight: {
            type: number,
            trim: true,
        },

        reps: {
            type: number,
            trim: true, 
        },

        sets: {
            type: number,
            trim: true,
        },

        distance: {
            type: number,
            trim: true,
        }
    }

  ]
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
//  type: "resistance",
// name: "Bicep Curl",
// duration: 20,
// weight: 100,
// reps: 10,
// sets: 4
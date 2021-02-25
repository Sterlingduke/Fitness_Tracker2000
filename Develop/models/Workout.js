const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercise:[
    { 
        type: {
        type: String,
        trim: true,
        required:"Exercise Type" 
        },

        duration: {
            type: Number,
            trim: true,
            required:"Exercise Time"
        },

        weight: {
            type: Number
           
        },

        reps: {
            type: Number
            
        },

        sets: {
            type:Number
            
        },

        distance: {
            type: Number
           
        }
    }

  ]
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
//  type: "resistance",
// name: "Bicep Curl",
// duration: 20,
// weight: 100,
// reps: 10,
// sets: 4
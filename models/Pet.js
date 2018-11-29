const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
    Owner: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    name: { type: String },
    dob: { type: String },
    age: { type: String },
    type: { type: String },
    breed: { type: String },
    gender: { type: String },
    food: { type: String },
    otherAnimals: { type: Array },
    vaccines: { type: Array }
});

const Pet = mongoose.model("User", petSchema);

module.exports = Pet;
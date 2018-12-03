const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vetSchema = new Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
});

const Vet = mongoose.model("Vet", vetSchema);

module.exports = Vet;
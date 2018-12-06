const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    // Owner: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    petId: { type: Number },
    species: { type: String },
    gender: { type: String },
    age: { type: Number },
    behavior: { type: String },
    previousMedicalHistory: { type: String },
    time: { type: Number },
    veterinarian: { type: String },
    weight: { type: Number },
    pulse: { type: Number },
    mmCRT: { type: Number},
    temp: { type: Number },
    resp: { type: Number },
    bcs: { type: Number },
    hydration: { type: String },
    ga: { type: String },
    integ: { type: String },
    eent: { type: String },
    cv: { type: String },
    ms: { type: String },
    pln: { type: String },
    gu: { type: String },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
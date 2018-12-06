import axios from "axios";

export default {
  // Gets all Pets
  getPets: function() {
    return axios.get("/api/Pets");
  },
  // Gets the Pet with the given id
  getPet: function(id) {
    return axios.get("/api/Pets/" + id);
  },
  //gets a single user's data
  getUser: function(id){
    return axios.get("/api/users" + id);
  },
  // Deletes the pet with the given id
  deletePet: function(id) {
    return axios.delete("/api/Pets/" + id);
  },
  // Saves a pet to the database
  addPet: function(petData) {
    return axios.post("/api/Pets", petData);
  },
  // Saves pet notes to the database
  addNotes: function(petNotes) {
    return axios.post("/api/Notes", petNotes);
  },
  getNotes: function(petId) {
    return axios.get("/api/Notes/" + petId )
  }
};
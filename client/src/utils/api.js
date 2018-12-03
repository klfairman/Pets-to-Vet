import axios from "axios";

export default {
  // Gets all books
  getPets: function() {
    return axios.get("/api/Pets");
  },
  // Gets the book with the given id
  getPet: function(id) {
    return axios.get("/api/Pets/" + id);
  },
  // Deletes the book with the given id
  deletePet: function(id) {
    return axios.delete("/api/Pets/" + id);
  },
  // Saves a book to the database
  saveBook: function(petData) {
    return axios.post("/api/Pets", petData);
  }
};
import axios from "axios";

export default {
  //Get the users
  getLogins: function() {
    return axios.get("/api/login")
  },
  getLogin: function(id) {
    return axios.get("/api/login/" + id)
  },
  deleteLogin: function(id) {
    return axios.delete("/api/login/" + id)
  },
  updateLogin: function(id, loginData){
    return axios.put("/api/login/" + id, loginData)
  },
  saveUser: function(loginData){
    return axios.post("/api/login", loginData)
  },
  updateAll: function(loginData){
    return axios.put("/api/login", loginData)
  }
};
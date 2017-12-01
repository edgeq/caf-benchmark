import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/totusers");

  },

  getActusers: function() {
  	return axios.get("/api/actusers");

  },


  getTotsubs: function() {
  	return axios.get("/api/totsub");
  }




	
};
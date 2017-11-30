import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/totusers");
  }

};

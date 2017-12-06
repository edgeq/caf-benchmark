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
    },

    getActschools: function() {
        return axios.get("/api/actschools");
    },

    getLocation: function() {
        return axios.get("/api/location");
    },

    getActprojects: function() {
        return axios.get("/api/actProjects");
    },

    getAgeGroupOne: function() {
        return axios.get("/api/ageGroup1");
    },

    getAgeGroupTwo: function() {
        return axios.get("/api/ageGroup2");
    },

    getAgeGroupThree: function() {
        return axios.get("/api/ageGroup3");
    },
        
    getAgeGroupFour: function() {
        return axios.get("/api/ageGroup4");
    }

};


//Location of users - Country Codes, and count for each country - done
//Age created from birth date.
// school and school count - done
//total users date -done
// actual users date -done

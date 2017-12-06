import React from "react";
import API from "../../src/utils/API"



// First, create an object containing LatLng and population for each city.
var citymap = {
    chicago: {
        center: {lat: 41.878, lng: -87.629},
        population: 27148560
    },
    newyork: {
        center: {lat: 40.714, lng: -74.005},
        population: 8405837
    },
    losangeles: {
        center: {lat: 34.052, lng: -118.243},
        population: 3857799
    },
    vancouver: {
        center: {lat: 49.25, lng: -123.1},
        population: 603502
    }
};

function initMap() {
    // Create the map.
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 1,
        center: {lat: 30, lng: -5},
        mapTypeId: 'terrain'
    });

    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the population.
    for (var city in citymap) {
        // Add the circle for this city to the map.
        var cityCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: citymap[city].center,
        radius: Math.sqrt(citymap[city].population) * 100
        });
    }
}

// export default LocationBox;

// var ReactScriptLoaderModule = require('react-script-loader');
// var ReactScriptLoaderMixin= ReactScriptLoaderModule.ReactScriptLoaderMixin;
// var ReactScriptLoader= ReactScriptLoaderModule.ReactScriptLoader;

// var scriptURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyClKqKk96lqJzBjF99E7CGL_jxE5GtBn0A&callback=initMap';

// // This function is called by the Google maps API after its initialization is
// // complete.
// // We need to define this function in the window scope to make it accessible
// // to the Google maps script.
// window.initializeMaps = function() {

// 	// This triggers the onScriptLoaded method call on all mounted Map components.
// 	ReactScriptLoader.triggerOnScriptLoaded(scriptURL);
// }
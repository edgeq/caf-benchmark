import React, { Component}  from 'react';
import API from "../../../utils/API";

require('./countryCodes.js');

const fetch = require("isomorphic-fetch");
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

const cityMap = [
  {
    name: 'Chicago',
    lat: 41.878, 
    lng: -87.629
  },
  {
      name: 'New York',
      lat: 40.714, 
      lng: -74.005
  },
  {
      name: 'Los Angeles',
      lat: 34.052, 
      lng: -118.243
  },
  {
      name: 'Vancouver',
      lat: 49.25, 
      lng: -123.1
  },
  {
      name: 'Germany',
      lat: 51.165691, 
      lng: 10.451526
  },
  {
      name: 'France',
      lat: 46.227638, 
      lng: 2.213749
  },
  {
      name: 'Australia',
      lat: -25.274398, 
      lng: 133.775136
  },
  {
      name: 'Australia',
      lat: -25.274398, 
      lng: 133.775136
  },{
    name: 'Chicago',
    lat: 41.878, 
    lng: -87.629
  },
  {
      name: 'New York',
      lat: 40.714, 
      lng: -74.005
  },
  {
      name: 'Los Angeles',
      lat: 34.052, 
      lng: -118.243
  },
  {
      name: 'Vancouver',
      lat: 49.25, 
      lng: -123.1
  },
  {
      name: 'Germany',
      lat: 51.165691, 
      lng: 10.451526
  },
  {
      name: 'France',
      lat: 46.227638, 
      lng: 2.213749
  },
  {
      name: 'Australia',
      lat: -25.274398, 
      lng: 133.775136
  },
  {
      name: 'Australia',
      lat: -25.274398, 
      lng: 133.775136
  }
];

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
  defaultZoom={1}
  defaultCenter={{ lat: 30, lng: -5 }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map((marker, i) => (
        <Marker
          key={i}
          position={{ lat: marker.lat, lng: marker.lng }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
);

class Map extends React.PureComponent {

  state = {
    markers: cityMap
  }

  // componentWillMount() {
  //   this.setState({ markers: [] })
  // }

  // componentDidMount() {

    

  //   const url = [
  //     // Length issue
  //     `https://gist.githubusercontent.com`,
  //     `/farrrr/dfda7dd7fccfec5474d3`,
  //     `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
  //   ].join("")

  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ markers: data.photos });
  //     });
  // }

  render() {
    return (
      <MapWithAMarkerClusterer markers={this.state.markers} id="map" class="animated fadeInUp" />
    )
  }
}

export default Map
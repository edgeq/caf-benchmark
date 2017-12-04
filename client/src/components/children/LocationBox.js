import React, { Component } from "react";
import API from "../../utils/API";





class LocationBox extends Component {
    
    state = {
		countries: [],
        count: []
    };

     componentDidMount() {
        this.loadLocation();
        
    }

    loadLocation = () => {
        API.getLocation()
            .then(res => {
            console.log(res)
            this.setState({ countries: res.data })
            })
            .catch(err => console.log(err));
    };



     renderLocation(){
        return (
            this.state.countries.map(function(countries){
                return (
                    <li>{countries.field_address_location_country_code} <a>{countries['COUNT(*)']}</a></li>
                )
            })
        )
    }



    render () {
        return (
            <div id="locationBox" className="animated fadeInUp col-sm-12">
                <div className="boxContent">
                    <h3>LOCATION</h3>
                    <div id="locationContent">
                        <div id="countryRankings">
                            <ol>
                                <h3>Country</h3> <h4>Count</h4>
                                {this.renderLocation()}
                            </ol>
                        </div>
                        <div id="map"></div>
                    </div>
                </div>
            </div>
        )
    };
};

export default LocationBox;
import React, { Component } from "react";
import API from "../../utils/API";
import Map from "./LocationBox/LocationMap";


const countriesArr = [
    {name: 'USA', count: '999'},
    {name: 'China', count: '777'}, 
    {name: 'Italy', count: '888'}, 
    {name: 'France', count: '888'}, 
    {name: 'Canada', count: '888'}, 
    {name: 'Spain', count: '888'}, 
    {name: 'UK', count: '888'}, 
    {name: 'Aus', count: '888'}, 
    {name: 'S. Korea', count: '888'}, 
    {name: 'Japan', count: '888'}, 
]

class LocationBox extends Component {

    state = {
		countries: [],
        subCount: []
    };

     componentDidMount() {
        this.loadLocation();

    }

    loadLocation = () => {
        API.getLocation()
            .then(res => {
            console.log(res.data)
            this.setState({ countries: res.data || [] })
            })
            .catch(err => console.log(err));
    };



     renderLocation(){
        return (
            this.state.countries.map(function(countries, i ){
                return (
                    <li key= {i}>{countries.field_address_location_country_code} <a>{countries['subCount']}</a></li>
                )
            })
        )
    }



    render () {
        return (
            <div id="locationBox" className="animated fadeInUp col-sm-12">
                <div className="boxContent">
                    <h3>USER LOCATIONS</h3>
                    <div id="locationContent">
                        <div id="countryRankings">
                            <h3>Country</h3> <h4>User Count</h4>
                            <ol>
                                {this.renderLocation()}
                            </ol>
                        </div>
                        <Map />
                    </div>
                </div>
            </div>
        )
    };
};

export default LocationBox;

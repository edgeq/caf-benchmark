import React, { Component } from "react";
import API from "../../utils/API";


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
		countries: countriesArr
    };



    render () {
        return (
            <div id="locationBox" className="animated fadeInUp col-sm-12">
                <div className="boxContent">
                    <h3>LOCATION</h3>
                    <div id="locationContent">
                        <div id="countryRankings">
                            <ol>
                                <h3>Country</h3> <h4>Count</h4>
                                <li>{this.state.countries[0].name} <a>{this.state.countries[0].count}</a></li>
                                <li>{this.state.countries[1].name} <a>{this.state.countries[1].count}</a></li>
                                <li>{this.state.countries[2].name} <a>{this.state.countries[2].count}</a></li>
                                <li>{this.state.countries[3].name} <a>{this.state.countries[3].count}</a></li>
                                <li>{this.state.countries[4].name} <a>{this.state.countries[4].count}</a></li>
                                <li>{this.state.countries[5].name} <a>{this.state.countries[5].count}</a></li>
                                <li>{this.state.countries[6].name} <a>{this.state.countries[6].count}</a></li>
                                <li>{this.state.countries[7].name} <a>{this.state.countries[7].count}</a></li>
                                <li>{this.state.countries[8].name} <a>{this.state.countries[8].count}</a></li>
                                <li>{this.state.countries[9].name} <a>{this.state.countries[9].count}</a></li>
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
import React, { Component } from "react";
import API from "../../utils/API";
import DonutWithText from "./DemographicsBox/DemographicsChart";


class DemographicsBox extends Component {

    state = {
        };


    render () {
        return (
            <div id="demographicsBox" className="animated fadeInUp col-sm-6">
                <div className="boxContent">
                    <h3>DEMOGRAPHICS</h3>
                    <div id="demographicsContent">
                        <DonutWithText />
                    </div>
                </div>
            </div>
        )
    };
};

export default DemographicsBox;

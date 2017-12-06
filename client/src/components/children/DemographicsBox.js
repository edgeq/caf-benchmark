import React, { Component } from "react";
import API from "../../utils/API";
import DonutWithText from "./DemographicsBox/DemographicsChart";

class DemographicsBox extends Component {

    state = {
        };

    // loadDemographics{
    //       // this code will run after all other $(document).ready() scripts
    //       // have completely finished, AND all page elements are fully loaded.
    //       var responseChartCanvas = document.getElementById("responseChart");
    //       var responseChart = new Chart(responseChartCanvas, {
    //           type: 'doughnut',
    //           data: {
    //               labels: ["Age Group 1", "Age Group 2", "Age Group 3", "Age Group 4"],
    //               datasets: [{
    //                   data: [1936, 437, 873, 582],
    //                   backgroundColor: [
    //                       '#F7464A',
    //                       '#3ccedb',
    //                       '#ffcc05',
    //                       '#4166b0'
    //                   ],
    //                   borderColor: [
    //                       '#FFF'
    //                   ],
    //                   borderWidth: 1
    //               }]
    //           },
    //           options: {
    //               responsive: true,
    //               animation:{
    //                   animateRotate:true,
    //
    //               },
    //               legend: {
    //                   display: true,
    //                   labels : {
    //                     fontColor : '#ffffff',
    //                     fontFamily: "Avenir"
    //                   }
    //               }
    //           }
    //       });
    //
    // }

    render () {
        return (
            <div id="demographicsBox" className="animated fadeInUp col-sm-6">
                <div className="boxContent">
                    <h3>DEMOGRAPHICS - USER AGE</h3>
                    <div id="demographicsContent">
                        <DonutWithText />
                    </div>
                </div>
            </div>
        )
    }
};

export default DemographicsBox;

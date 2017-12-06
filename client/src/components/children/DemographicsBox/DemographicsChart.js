import React, { Component } from "react";
import API from "../../../utils/API";
// var DoughnutChart = require("react-chartjs").Doughnut;
import {Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js';


Chart.defaults.global.responsive = true;


var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
    
    var chart = this.chart;
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";
    
    var sum = 0;
    for (var i = 0; i < chart.config.data.datasets[0].data.length; i++) {
      sum += chart.config.data.datasets[0].data[i];
    }

    var text = sum,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2.2;

    ctx.fillText(text, textX, textY);
  }
});

const data = {
	labels: [
		'<13',
		'13-14',
		'15-18',
		'19-22'
    ],
	datasets: []
};

const options = {
    legend: {
        position: 'bottom',
        labels: {
            fontColor: 'white'
        }
    },
    maintainAspectRatio: false
};


class DemographicsChart extends Component {

    state = {
        ageOne: [],
        ageTwo: [],
        ageThree: [],
        ageFour: [],
        data: data
    };

    componentDidMount() {
        this.loadAgeGroups();
    }

    async loadAgeGroups(){
       
        let oneData = await API.getAgeGroupOne()
        let twoData = await API.getAgeGroupTwo()
        let threeData = await API.getAgeGroupThree()
        let fourData = await API.getAgeGroupFour()

        let one = oneData.data[0].subCount
        let two = twoData.data[0].subCount
        let three = threeData.data[0].subCount
        let four = fourData.data[0].subCount

        this.setState({
            data: {
                ...this.state.data,
                datasets: [{
                    data: [one, two, three, four],
                    backgroundColor: [
                    '#2dd9e2',
                    '#6491d8',
                    '#e5424e',
                    '#fcd559'
                    ],
                    hoverBackgroundColor: [
                    '#00a0af',
                    '#4166b0',
                    '#cb2026',
                    '#ffcc05'
                    ]
                }]
            }
        })
        console.log("this is after set state", this.state)

    };

    render () {
        console.log(this.state, "this is the new state")
        return (
            <Doughnut 
                data={this.state.data}
                options={options}
            />
        )
    };
};

export default DemographicsChart;

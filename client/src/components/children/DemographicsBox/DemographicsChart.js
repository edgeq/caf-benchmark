import React, { Component } from "react";
import API from "../../../utils/API";
// var DoughnutChart = require("react-chartjs").Doughnut;
import {Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js';


// Chart.defaults.global.responsive = true;


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
        textY = height / 2;

    ctx.fillText(text, textX, textY);
  }
});

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

// class DonutWithText extends React.Component {

//   render() {
//     return (
//       <div>
//         <h2>React Doughnut with Totalled Data</h2>
//         <Doughnut data={data} />
//       </div>
//     );
//   }
// };

// export default DonutWithText;

class DemographicsChart extends Component {

    state = {
        };

    render () {
        return (
            <Doughnut data={data} />
        )
    };
};

export default DemographicsChart;

import React, { Component } from "react";
import API from "./../../utils/API";
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js';

class ActiveUsersGraph extends Component  {
    
    constructor(props) {
      super(props)
      this.options = {
        type: 'line',
        data: {
            labels: ['Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            datasets: [{
            backgroundColor: 'rgb(203, 32, 38)',
            data: [
                1500, 1600, 1700, 1900, 2003
            ],
            fill: false

            }]
        },
        options: {
          title: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              type: "linear",
              display: true,
              position: "left"
            }]
          },
          legend: {
            display: false
          },
          responsive: true
        }
      }
      this.toggleChart = this.toggleChart.bind(this)
    }
    
    toggleChart() {
      this.options.type = this.options.type === 'line' ? 'bar' : 'line'
      this.chart.destroy()
      this.chart = new Chart(this.ctx, this.options)
    }
    
    componentDidMount() {
      this.canvas = document.querySelector('#activeUsersGraph')
      this.ctx = this.canvas.getContext('2d')
      this.chart = new Chart(this.ctx, this.options)
    }
    
    render() {
      return (
        <div >
          <canvas className="graph" id="activeUsersGraph" style={{height: '75px'}}/>
          <div className="text-center">
          </div>
        </div>
      )
    }
  }
  
export default ActiveUsersGraph;
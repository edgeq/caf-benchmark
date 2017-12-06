import React, { Component } from "react";
import API from "./../../utils/API";
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js';

class FinalizedProjectsGraph extends Component  {
    
    constructor(props) {
      super(props)
      this.options = {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(203, 32, 38)',
            data: [
              4, 10, 12, 16, 18
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
      this.canvas = document.querySelector('#finalizedProjectsGraph')
      this.ctx = this.canvas.getContext('2d')
      this.chart = new Chart(this.ctx, this.options)
    }
    
    render() {
      return (
        <div>
          <canvas className="graph" id="finalizedProjectsGraph"  style={{height: '80px'}}/>
          <div className="text-center">
          </div>
        </div>
      )
    }
  }
  
export default FinalizedProjectsGraph;
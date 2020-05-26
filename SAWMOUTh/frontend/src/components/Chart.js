import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["bertleon", "paleonluna"],
        datasets: [
          {
            label: "Play Time",
            data: [20, 30],
          },
        ],
        backgroundColor: ["rgba(255,99,133,0.6)", "rgba(30,255,100,0.6)"],
      },
    };
  }
  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}

export default Chart;

import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Play Time",
            data: [],
          },
        ],
      },
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/statsAPI")
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        var names = [];
        var times = [];
        data.forEach((element) => {
          names.push(element.username);
          times.push(element.playtime);
        });
        this.setState({
          chartData: {
            labels: names,
            datasets: [
              {
                label: "Play Time",
                data: times,
              },
            ],
          },
        });
      });
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

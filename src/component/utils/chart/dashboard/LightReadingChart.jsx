import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import dayjs from 'dayjs';

export default class LightReadingsChart extends React.Component {
    state = {
        lightReadings: [],
        chartData: {}
    };

    componentDidMount() {
      this.fetchData(); // Fetch initial data
      this.interval = setInterval(this.fetchData, 1000); 
    }

    componentWillUnmount() {
      // Clear the interval when the component is unmounted to avoid memory leaks
      clearInterval(this.interval);
    }

    fetchData = () => {
      const {moduleId} = this.props;

      axios.get(`http://3.133.97.0:8080/api_v1/sensor/light/all/${moduleId}`)
      .then(res => {
          const lightReadings = res.data;
          this.setState({ lightReadings }, this.prepareChartData);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
    };

    prepareChartData = () => {
        const { lightReadings } = this.state;

        // Extract timestamps and light readings for the chart
        const timestamps = lightReadings.map(entry => dayjs(entry.timestamp).format('MM/DD HH:mm'));
        const readings = lightReadings.map(entry => entry.lightReading);

        // Set up chart data
        const chartData = {
        labels: timestamps,
        datasets: [
            {
            label: 'Time Stamps',
            data: readings,
            fill: {
                target: 'origin',
                above: 'rgba(138, 255, 165,0.2)',   // Gradient area color
            },
            tension: 0.2,
            borderColor: 'rgb(79, 227, 147)',   // Line color
            borderWidth: 2,
            pointBackgroundColor: 'rgb(166, 255, 207)', // Point color
            pointHoverBorderColor: 'rgb(209, 255, 230)', 
            },
        ],
        };

        this.setState({ chartData });
    };

    render() {
        const { chartData } = this.state;

    return (
      <div className="w-full h-full p-10">
        {chartData.labels ? (
          <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    );
  }
}
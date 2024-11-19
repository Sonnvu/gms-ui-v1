import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import dayjs from 'dayjs';

export default class SoilTempChart extends React.Component {
    state = {
        soilTempReadings: [],
        airTempReadings: [],
        chartData: {}
    };

    componentDidMount() {
        axios.get('http://3.133.97.0:8080/api_v1/sensor/temp/soil/all')
        .then(res => {
            const soilTempReadings = res.data;
            this.setState({ soilTempReadings }, this.prepareChartData);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

        axios.get('http://3.133.97.0:8080/api_v1/sensor/temp/air/all')
        .then(res => {
            const airTempReadings = res.data;
            this.setState({ airTempReadings }, this.prepareChartData);
        })
        .catch(error => {
            console.error('Error fetching air temperature data:', error);
        });
    }

    prepareChartData = () => {
        const { soilTempReadings, airTempReadings  } = this.state;

        // Extract timestamps and light readings for the chart
        const timestamps = soilTempReadings.map(entry => dayjs(entry.timestamp).format('MM/DD HH:mm'));
        const readings = soilTempReadings.map(entry => entry.soilTempReading);
        const airReadings = airTempReadings.map(entry => entry.airTempReading);

        // Set up chart data
        const chartData = {
        labels: timestamps,
        datasets: [
            {
                label: 'Time Stamps',
                data: readings,
                fill: {
                    target: 'origin',
                    above: 'rgba(161, 255, 239,0.2)',   // Gradient area color
                },
                tension: 0.2,
                borderColor: 'rgb(79, 227, 202)',   // Line color
                borderWidth: 2,
                pointBackgroundColor: 'rgb(150, 255, 237)', // Point color
                pointHoverBorderColor: 'rgb(31, 224, 191)',        // Hover point border color
            },
            {
                label: 'Air Temperature',
                data: airReadings,
                fill: {
                    target: 'origin',
                    above: 'rgba(138, 255, 165,0.2)',   // Gradient area color
                },
                tension: 0.2,
                borderColor: 'rgb(79, 227, 147)',   // Line color
                borderWidth: 2,
                pointBackgroundColor: 'rgb(166, 255, 207)', // Point color
                pointHoverBorderColor: 'rgb(209, 255, 230)',        // Hover point border color
            }
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
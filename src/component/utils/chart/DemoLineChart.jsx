import {defaults} from "chart.js/auto";
import {Line} from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
export default function DemoLineChart() {
    return (
        <div className="w-full h-full p-10">
            <Line data={{
                labels: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
                datasets: [
                    {
                        data: [100, 59, 42, 52, 56, 55, 40, 90],
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
                        data: [90, 80, 70, 90, 69, 38, 20, 30],
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
            }}
                  options={{
                      scales: {
                          y: {
                              beginAtZero: true,
                              display: false
                          },
                      },
                      plugins: {
                          legend: {
                              display: false, // Hide legend
                          },
                      },
                      elements: {
                          point: {
                              radius: 4, // Point radius
                              hoverRadius: 6, // Hover point radius
                          },
                      },
                  }}
            />
        </div>
    )
}
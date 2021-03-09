import { Line } from 'react-chartjs-2';
import './Chart.css';
import React from 'react';

function Chart(props) {
    return (
        <div className="barChart">
            <Line
                data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                    datasets: [
                        {
                            data: [86, 452, 892, 1023, 2034],
                            label: "user",
                            borderColor: "#3e95cd",
                            fill: false,
                            lineTension: 0
                        }
                    ]
                }}
                options={{
                    title: {
                        display: true,
                        text: "The chart shows user growth over month"
                    },
                    legend: {
                        display: true,
                        position: "bottom"
                    }
                }}
            />
        </div>
    );
}

export default Chart
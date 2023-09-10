import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {BarElement, CategoryScale, Chart, LinearScale} from "chart.js";

Chart.register(LinearScale, CategoryScale, BarElement);

const BarGraph = ({ data, title }) => {
    const barData = {
        labels: Object.entries(data).map(([date, value]) => date),
        datasets: [
            {
                "data": Object.entries(data).map(([date, value]) => value.sum),
                backgroundColor: '#d28818',
                borderColor: '#f5a623',
                borderWidth: 2,
            }
        ]
    };
    const options = {
        color: '#f5a623dd',
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: title
            },
            tooltip: {
                callbacks: {
                    beforeTitle: (context) => {
                        const index = context[0].dataIndex;
                        return context[0].chart.data.labels[index];
                    }
                }
            }
        }
    };

    const textPlugin = {
        id: 'textOnTopOfBar',
        afterDraw: (chart) => {
            const ctx = chart.ctx;
            ctx.fillStyle = '#efefef';
            ctx.font = "9px Arial";
            chart.data.datasets.forEach((dataset, i) => {
                const meta = chart.getDatasetMeta(i);
                meta.data.forEach((bar, index) => {
                    const dataValue = Math.round(dataset.data[index]*1000)/10;
                    // const dataValue = Math.round()/10;
                    ctx.fillText(dataValue + "¢", bar.x-10, bar.y - 5);
                });
            });
        }
    };

    return (
        <div className={"graph-data-container"}>
            <h2>{title}</h2>
            <Bar data={barData} options={options} plugins={[textPlugin]} />
        </div>
    );
};

export default BarGraph;
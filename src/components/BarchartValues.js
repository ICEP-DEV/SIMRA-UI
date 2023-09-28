import React from 'react';
import BarChart from './components/BarChart';

function BarchartValues() {

  const options = {
    scales: {
      y: {
        type: 'linear', 
        beginAtZero: true, 
        title: {
          display: true,
          text: 'Mean Bacteria Level',
        },
      },
      x: {
       
      },
    },
  };
  const data = {
    labels: ['Province 1', 'Province 2', 'Province 3', 'Province 4', 'Province 5'],
    datasets: [
      {
        label: 'Mean Bacteria Level',
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [3.5, 4.2, 2.8, 5.1, 3.9], 
      },
    ],
  };
  
  return (
    <div>
      <h1>Bacteria Mean Levels by Province</h1>
      <BarChart />
    </div>
  );
}

export default BarchartValues;

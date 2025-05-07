import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { mockTransactions } from '../../data/mockTransactions';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const categoryTotals = mockTransactions.reduce((acc, transaction) => {
    if (transaction.type === 'expense') {
      acc[transaction.category] =
        (acc[transaction.category] || 0) + transaction.amount;
    }
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Gider Kategorileri Dağilimi',
        font: {
          size: 16,
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '300px', margin: '0 auto' }}>
      <Pie data={data} options={options} />
      {console.log(categoryTotals)}
    </div>
  );
};

export default PieChart;

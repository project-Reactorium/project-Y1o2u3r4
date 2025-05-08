import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler
);

//  props ile data aldım
const CurrencyChart = ({ data }) => {
  if (!data || data.length === 0) return null;

  const chartData = {
    labels: data.map((item) => `${item.currencyCodeA}/${item.currencyCodeB}`),
    datasets: [
      {
        label: "Buy Rate",
        data: data.map((item) => item.rateBuy),
        borderColor: "orange",
        backgroundColor: "rgba(255,165,0,0.3)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true },
    },
  };

  return (
    <div style={{ background: "transparent", padding: "10px" }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default CurrencyChart;

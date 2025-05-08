import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import styles from "./TransactionChart.module.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const TransactionChart = () => {
  const data = {
    labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs"],
    datasets: [
      {
        label: "Giderler",
        data: [400, 300, 450, 500, 200],
        backgroundColor: "#ff6384",
      },
      {
        label: "Gelirler",
        data: [600, 800, 650, 700, 900],
        backgroundColor: "#36a2eb",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "bottom" },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className={styles.ChartWrapper}>
      <h4>İşlem Grafiği</h4>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TransactionChart;

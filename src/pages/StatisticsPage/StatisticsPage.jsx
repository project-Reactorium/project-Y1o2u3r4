import StatisticsDashboard from "../../components/Statistics/StatisticsDashboard";
import styles from "./StatisticsPage.module.css";

const StatisticsPage = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Statistics</h2>
      <StatisticsDashboard />
    </div>
  );
};

export default StatisticsPage;

import React from 'react';
import { useSelector } from 'react-redux';
import { selectStatistics } from '../../redux/statistics/statisticsSelectors';
import styles from './Statistics.module.css';

const StatisticsTable = () => {
  const statistics = useSelector(selectStatistics);

  if (!statistics || statistics.length === 0) {
    return <p>Veri bulunamadı.</p>;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Kategori</th>
          <th>Tutar</th>
        </tr>
      </thead>
      <tbody>
        {statistics.map(({ category, sum }) => (
          <tr key={category}>
            <td>{category}</td>
            <td>{sum.toFixed(2)} ₺</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StatisticsTable;

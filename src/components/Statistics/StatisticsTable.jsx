import React from 'react';
import { useSelector } from 'react-redux';
import { selectStatistics } from '../../redux/statistics/statisticsSelectors';

const StatisticsTable = () => {
  const statistics = useSelector(selectStatistics);

  if (!statistics.length) {
    return <p>Veri bulunamadı.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {statistics.map((item) => (
          <tr key={item.id}>
            <td>{item.date}</td>
            <td>{item.type}</td>
            <td>{item.category}</td>
            <td>{item.amount}</td>
            <td>{item.comment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StatisticsTable;

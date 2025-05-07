import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatistics } from '../../redux/statistics/statisticsOperations';
import { selectMonth, selectYear } from '../../redux/statistics/statisticsSelectors';
import StatisticsTable from './StatisticsTable';

const StatisticsDashboard = () => {
  const dispatch = useDispatch();
  const month = useSelector(selectMonth);
  const year = useSelector(selectYear);

  useEffect(() => {
    dispatch(fetchStatistics({ month, year }));
  }, [dispatch, month, year]);

  return (
    <div>
      <h2>Statistics</h2>
      <StatisticsTable />
    </div>
  );
};

export default StatisticsDashboard;

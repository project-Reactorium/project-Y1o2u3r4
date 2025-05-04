import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MonthSelector from './MonthSelector';
import YearSelector from './YearSelector';
import StatisticsTable from './StatisticsTable';
import { fetchStatistics } from '../../redux/statistics/statisticsOperations';
import { selectMonth, selectYear } from '../../redux/statistics/statisticsSelectors';
import styles from './Statistics.module.css';

const StatisticsDashboard = () => {
  const dispatch = useDispatch();
  const month = useSelector(selectMonth);
  const year = useSelector(selectYear);

  useEffect(() => {
    dispatch(fetchStatistics({ month, year }));
  }, [dispatch, month, year]);

  return (
    <div className={styles.dashboard}>
      <div className={styles.selectors}>
        <MonthSelector />
        <YearSelector />
      </div>
      <StatisticsTable />
    </div>
  );
};

export default StatisticsDashboard;

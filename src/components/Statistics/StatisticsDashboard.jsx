import React, { useEffect } from 'react';
import styles from './StatisticsDashboard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatistics } from '../../redux/statistics/statisticsOperations';
import {
  selectMonth,
  selectYear,
  selectSelectedCategory,
} from '../../redux/statistics/statisticsSelectors';
import { setSelectedCategory } from '../../redux/statistics/statisticsSlice';
import StatisticsTable from './StatisticsTable';
import MonthSelector from './MonthSelector';
import YearSelector from './YearSelector';

const StatisticsDashboard = () => {
  const dispatch = useDispatch();
  const month = useSelector(selectMonth);
  const year = useSelector(selectYear);


  useEffect(() => {
    dispatch(fetchStatistics({ month, year }));
  }, [dispatch, month, year]);

  const handleCategoryChange = (value) => {
    dispatch(setSelectedCategory(value));
  };

  return (
    <div className={styles.statisticsContainer}>
      <div className={styles.filtersRow}>
        <MonthSelector />
        <YearSelector />
      </div>
      <div className={styles.tableWrapper}>
        <StatisticsTable />
      </div>
    </div>
  );
};

export default StatisticsDashboard;
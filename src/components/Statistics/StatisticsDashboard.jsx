import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatistics } from '../../redux/statistics/statisticsOperations';
import {
  selectMonth,
  selectYear,
  selectSelectedCategory,
} from '../../redux/statistics/statisticsSelectors';
import {
  setSelectedCategory,
} from '../../redux/statistics/statisticsSlice';
import StatisticsTable from './StatisticsTable';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown';

const StatisticsDashboard = () => {
  const dispatch = useDispatch();
  const month = useSelector(selectMonth);
  const year = useSelector(selectYear);
  const selectedCategory = useSelector(selectSelectedCategory);

  useEffect(() => {
    dispatch(fetchStatistics({ month, year }));
  }, [dispatch, month, year]);

  const handleCategoryChange = (value) => {
    dispatch(setSelectedCategory(value));
  };

  return (
    <div>
      <h2>Statistics</h2>
      <CategoryDropdown selected={selectedCategory} onChange={handleCategoryChange} />
      <StatisticsTable />
    </div>
  );
};

export default StatisticsDashboard;

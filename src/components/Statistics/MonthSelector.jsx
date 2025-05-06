import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMonth } from '../../redux/statistics/statisticsSlice';
import { selectMonth } from '../../redux/statistics/statisticsSelectors';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const MonthSelector = () => {
  const dispatch = useDispatch();
  const selectedMonth = useSelector(selectMonth);

  const handleChange = (e) => {
    dispatch(setMonth(Number(e.target.value)));
  };

  return (
    <select value={selectedMonth} onChange={handleChange}>
      {months.map((month, index) => (
        <option key={index} value={index + 1}>
          {month}
        </option>
      ))}
    </select>
  );
};

export default MonthSelector;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setYear } from '../../redux/statistics/statisticsSlice';
import { selectYear } from '../../redux/statistics/statisticsSelectors';

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

const YearSelector = () => {
  const dispatch = useDispatch();
  const selectedYear = useSelector(selectYear);

  const handleChange = (e) => {
    dispatch(setYear(Number(e.target.value)));
  };

  return (
    <select value={selectedYear} onChange={handleChange}>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearSelector;

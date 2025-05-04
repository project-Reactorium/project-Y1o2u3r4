import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMonth } from '../../redux/statistics/statisticsSlice';
import { selectMonth } from '../../redux/statistics/statisticsSelectors';

const months = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
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

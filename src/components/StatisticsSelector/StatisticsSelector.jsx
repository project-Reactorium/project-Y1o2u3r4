import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { getTransactionsSummaryByPeriod } from '../../redux/statistics/statisticsOperations';
import {
  monthName,
  currentMonth,
  currentYear,
  optionsMonth,
  optionsYear,
} from './serviceSelect';

import CustomDropIndicator from '../CustomDropIndicator/CustomDropIndicator';

import style from './statisticsSelector.module.css';
import { styleSelect } from './styleSelect';

function StatisticsSelector() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsLoggedIn);

  const [month, setMonth] = useState({ value: currentMonth, label: monthName });
  const [year, setYear] = useState({ value: currentYear, label: currentYear });
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [yearIsOpen, setYearIsOpen] = useState(false);

  const handleMonthChange = useCallback(selectedMonth => {
    setMonth(selectedMonth);
  }, []);

  const handleYearChange = useCallback(selectedYear => {
    setYear(selectedYear);
  }, []);

  const handleMenuOpen = useCallback(() => {
    setMenuIsOpen(true);
  }, []);

  const handleMenuClose = useCallback(() => {
    setMenuIsOpen(false);
  }, []);

  const handleYearOpen = useCallback(() => {
    setYearIsOpen(true);
  }, []);

  const handleYearClose = useCallback(() => {
    setYearIsOpen(false);
  }, []);

  const filteredYearOptions = optionsYear.filter(
    option => Number(option.value) <= currentYear
  );

  useEffect(() => {
    if (isAuth) {
      dispatch(
        getTransactionsSummaryByPeriod({
          month: Number(month.value),
          year: Number(year.value),
        })
      );
    }
  }, [dispatch, isAuth, month, year]);

  return (
    <div className={style.selectContainer}>
      <Select
        className={style.select}
        styles={styleSelect}
        options={optionsMonth}
        value={month}
        onChange={handleMonthChange}
        name="optionsMonth"
        id="month-select"
        placeholder={month.label}
        isSearchable={false}
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
        components={{
          DropdownIndicator: () => <CustomDropIndicator up={menuIsOpen} />,
        }}
      />
      <Select
        className={style.select}
        styles={styleSelect}
        options={filteredYearOptions}
        value={year}
        onChange={handleYearChange}
        name="optionYear"
        id="years-select"
        placeholder={year.label}
        isSearchable={false}
        onMenuOpen={handleYearOpen}
        onMenuClose={handleYearClose}
        components={{
          DropdownIndicator: () => <CustomDropIndicator up={yearIsOpen} />,
        }}
      />
    </div>
  );
}

export default StatisticsSelector;

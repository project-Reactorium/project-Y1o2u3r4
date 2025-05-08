// src/components/Statistics/YearSelector.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setYear } from '../../redux/statistics/statisticsSlice';
import styles from './Dropdown.module.css';

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

const YearSelector = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const handleSelect = (year) => {
    dispatch(setYear(year));
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer} ref={ref}>
      <div className={styles.label} onClick={() => setIsOpen(prev => !prev)}>
        Year ▼
      </div>
      {isOpen && (
        <ul className={styles.menu}>
          {years.map(year => (
            <li key={year} onClick={() => handleSelect(year)}>
              {year}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default YearSelector;

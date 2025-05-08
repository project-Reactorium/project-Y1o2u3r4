// src/components/Statistics/MonthSelector.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMonth } from '../../redux/statistics/statisticsSlice';
import styles from './Dropdown.module.css';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const MonthSelector = () => {
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

  const handleSelect = (index) => {
    dispatch(setMonth(index + 1));
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer} ref={ref}>
      <div className={styles.label} onClick={() => setIsOpen(prev => !prev)}>
        Month ▼
      </div>
      {isOpen && (
        <ul className={styles.menu}>
          {months.map((month, index) => (
            <li key={month} onClick={() => handleSelect(index)}>
              {month}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MonthSelector;

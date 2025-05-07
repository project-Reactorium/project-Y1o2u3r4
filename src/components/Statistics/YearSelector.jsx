// src/components/Statistics/YearSelector.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setYear } from '../../redux/statistics/statisticsSlice';
import { selectYear } from '../../redux/statistics/statisticsSelectors';
import styles from './Dropdown.module.css';

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

const YearSelector = () => {
  const dispatch = useDispatch();
  const selected = useSelector(selectYear);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  return (
    <div className={styles.dropdownContainer} ref={ref}>
      <div className={styles.label} onClick={() => setIsOpen(o => !o)}>
        Year{selected ? `: ${selected}` : ''} ▼
      </div>
      {isOpen && (
        <ul className={styles.menu}>
          {years.map(y => (
            <li
              key={y}
              className={y === selected ? styles.active : ''}
              onClick={() => {
                dispatch(setYear(y));
                setIsOpen(false);
              }}
            >
              {y}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default YearSelector;

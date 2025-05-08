// src/components/Statistics/MonthSelector.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMonth } from '../../redux/statistics/statisticsSlice';
import { selectMonth } from '../../redux/statistics/statisticsSelectors';
import styles from './Dropdown.module.css';  

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const MonthSelector = () => {
  const dispatch = useDispatch();
  const selected = useSelector(selectMonth);
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
        Month{selected ? `: ${months[selected - 1]}` : ''} ▼
      </div>
      {isOpen && (
        <ul className={styles.menu}>
          {months.map((m, i) => (
            <li
              key={m}
              className={i + 1 === selected ? styles.active : ''}
              onClick={() => {
                dispatch(setMonth(i + 1));
                setIsOpen(false);
              }}
            >
              {m}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MonthSelector;

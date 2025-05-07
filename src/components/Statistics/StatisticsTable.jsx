import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredStatistics,
  selectStatistics,
  selectSelectedCategory,
} from '../../redux/statistics/statisticsSelectors';
import {
  setSelectedCategory,
} from '../../redux/statistics/statisticsSlice';
import { categoriesFilter } from '../../data/categories';
import styles from './StatisticsTable.module.css';

const StatisticsTable = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(selectFilteredStatistics);
  const allStats = useSelector(selectStatistics);
  const selectedCategory = useSelector(selectSelectedCategory);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen((v) => !v);
  const handleSelect = (cat) => {
    dispatch(setSelectedCategory(cat));
    setIsOpen(false);
  };


  const expenseTotal = allStats
    .filter((item) => item.type === 'expense')
    .reduce((sum, item) => sum + item.sum, 0);
  const incomeTotal = allStats
    .filter((item) => item.type === 'income')
    .reduce((sum, item) => sum + item.sum, 0);

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
       
            <th ref={dropdownRef} className={styles.categoryHeader}>
              <div onClick={toggleDropdown} className={styles.headerLabel}>
                Category
                {selectedCategory && (
                  <span className={styles.selected}>
                    ({selectedCategory})
                  </span>
                )}
              </div>
              {isOpen && (
                <ul className={styles.dropdownMenu}>
                  <li
                    className={!selectedCategory ? styles.active : ''}
                    onClick={() => handleSelect('')}
                  >
                    All
                  </li>
                  {categoriesFilter.map((cat) => (
                    <li
                      key={cat}
                      className={cat === selectedCategory ? styles.active : ''}
                      onClick={() => handleSelect(cat)}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
            </th>
            <th>Sum</th>
          
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan={5}>Veri bulunamadı.</td>
            </tr>
          ) : (
            filtered.map((item) => (
              <tr key={item.id}>
      
                <td>{item.category}</td>
                <td>{item.sum.toFixed(2)}</td>
        
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className={styles.totals}>
        <div>
          <strong>Expenses:</strong>{' '}
          {expenseTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </div>
        <div>
          <strong>Income:</strong>{' '}
          {incomeTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </div>
      </div>
    </>
  );
};

export default StatisticsTable;

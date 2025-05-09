import { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Icon from '../../Icons';
import styles from './Navigation.module.css';

function Navigation() {
  const getClasses = useCallback((isActive) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  }, []);

  const getCurrencyClasses = useCallback((isActive) => {
    return isActive
      ? `${styles.navLink} ${styles.active}`
      : `${styles.navLink} ${styles.currencyLink}`;
  }, []);

  return (
    <nav className={styles.navigation}>
      <div className={styles.navItem}>
        <NavLink to="/" className={({ isActive }) => getClasses(isActive)}>
          <div className={styles.linkIcon}>
            <Icon id="home-icon" className={styles.homeIcon} />
          </div>
          <span className={styles.linkText}>Home</span>
        </NavLink>
      </div>

      <div className={styles.navItem}>
        <NavLink
          to="statistics"
          className={({ isActive }) => getClasses(isActive)}
        >
          <div className={styles.linkIcon}>
            <Icon id="statistics-icon" className={styles.graphicIcon} />
          </div>
          <span className={styles.linkText}>Statistics</span>
        </NavLink>
      </div>

      <div className={styles.navItem}>
        <NavLink
          to="currency"
          className={({ isActive }) => getCurrencyClasses(isActive)}
        >
          <div className={styles.linkIcon}>
            <Icon id="dollar-icon" className={styles.dollarIcon} />
          </div>
          <span className={styles.linkText}>Currency</span>
        </NavLink>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  // Add prop types if needed
};

export default memo(Navigation);

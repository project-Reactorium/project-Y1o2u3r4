import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../../Icons';
import css from './Header.module.css';

function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link to="/" className={css.logoRouter}>
          <Icon id="tab-desk-logo" className={css.tabDeskLogo} />
        </Link>

        <ul className={css.userMenu}>
          <li>
            <p className={css.NameAndExit}>
              Hello Anonymous |
              <span className={css.exitWrapper}>
                <Icon id="exit-icon" className={css.exitLogo} />
                Exit
              </span>
            </p>
          </li>
        </ul>
      </div>
    </header>
  );
}

Header.propTypes = {
  // Add prop types if needed
};

export default memo(Header);

import { memo } from 'react';
import PropTypes from 'prop-types';
import css from './Home.module.css';

function Home() {
  return <div className={css.home}></div>;
}

Home.propTypes = {
  // Add prop types if needed
};

export default memo(Home);

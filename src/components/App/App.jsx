import { memo } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Statistics from '../Statistics/Statistics';
import Balance from '../Balance/Balance';
import Currency from '../Currency/Currency';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <div className="vertical-nav">
          <Navigation />
          <Balance />
          <Currency />
        </div>
        <div className="stats-container">
          <Statistics />
        </div>
      </div>
    </>
  );
}

App.propTypes = {
  // Add prop types if needed
};

export default memo(App);

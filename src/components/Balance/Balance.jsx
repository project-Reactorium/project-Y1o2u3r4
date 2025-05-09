import { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserBalance } from '../../redux/auth/selectors';
import { getBalanceThunk } from '../../redux/auth/operations';
import { formatter } from '../../helpers/formatBalance';
import css from './Balance.module.css';

function Balance() {
  const dispatch = useDispatch();
  const balance = useSelector(selectUserBalance);

  useEffect(() => {
    dispatch(getBalanceThunk());
  }, [dispatch]);

  const formattedBalance = balance ? formatter.format(balance) : '0.00';

  return (
    <div className={css.balance}>
      <h3>Your balance</h3>
      <p>
        ₴ <span>{formattedBalance}</span>
      </p>
    </div>
  );
}

Balance.propTypes = {
  // Add prop types if needed
};

export default memo(Balance);

import { memo, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrencyData } from '../../redux/Currency/selectors';
import { getCurrency } from '../../redux/Currency/operations';
import useMedia from '../../hooks/useMedia';
import imageTab from '../../../public/images/currency.png';
import s from './Currency.module.css';

function Currency() {
  const currency = useSelector(selectCurrencyData);
  const dispatch = useDispatch();
  const { isDesktop } = useMedia();

  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);

  const rates = useMemo(() => ({
    dollar: {
      buy: currency?.dollar?.rateBuy?.toFixed(2) || '-',
      sell: currency?.dollar?.rateSell?.toFixed(2) || '-',
    },
    euro: {
      buy: currency?.euro?.rateBuy?.toFixed(2) || '-',
      sell: currency?.euro?.rateSell?.toFixed(2) || '-',
    },
  }), [currency]);

  const renderCurrencyTable = () => (
    <div className={s.currency_table}>
      <ul className={s.currency_table_head}>
        <li className={s.currency_item}>Currency</li>
        <li className={s.currency_item}>Purchase</li>
        <li className={s.currency_item}>Sale</li>
      </ul>
      <ul className={s.table_body}>
        <li className={s.currency_tr}>
          <p className={s.currency}>USD</p>
          <p className={s.currency}>{rates.dollar.buy}</p>
          <p className={s.currency}>{rates.dollar.sell}</p>
        </li>
        <li className={s.currency_tr}>
          <p className={s.currency}>EUR</p>
          <p className={s.currency}>{rates.euro.buy}</p>
          <p className={s.currency}>{rates.euro.sell}</p>
        </li>
      </ul>
    </div>
  );

  const renderDiagram = () => {
    if (!isDesktop) {
      return <img src={imageTab} alt="currency diagram" />;
    }

    return (
      <div className={s.diagram}>
        <p className={s.lowerNumber}>{rates.dollar.buy}</p>
        <p className={s.higherNumber}>{rates.euro.buy}</p>
        <img src={imageTab} alt="currency diagram" />
      </div>
    );
  };

  return (
    <div className={s.currency_wrapper}>
      {renderCurrencyTable()}
      {renderDiagram()}
    </div>
  );
}

Currency.propTypes = {
  // Add prop types if needed
};

export default memo(Currency);

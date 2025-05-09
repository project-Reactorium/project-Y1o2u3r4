import { useDispatch, useSelector } from 'react-redux';
import PieChart from '../PieChart/PieChart';
import css from './Statistics.module.css';
import { selectSummary } from '../../redux/statistics/statisticsSelectors.js';
import coloredCategoriesMap from './coloredCategoriesMap';
import StatisticsTable from './StatisticsTable';
import { useEffect } from 'react';
import { getTransactionsSummaryByPeriod } from '../../redux/statistics/statisticsOperations.js';
import { getCurrentMonthYear } from '../../helpers/dateHelper';
import StatisticsSelector from '../StatisticsSelector/StatisticsSelector';

function Statistics() {
  const transactions = useSelector(selectSummary);
  const expense = transactions.categoriesSummary
    ? transactions.categoriesSummary.filter(
        transaction => transaction.type === 'EXPENSE'
      )
    : [];

  const expenseTotal = transactions.expenseSummary;
  const incomeTotal = transactions.incomeSummary;

  const data = expense.map(item => ({
    ...item,
    color: coloredCategoriesMap.get(item.name),
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactionsSummaryByPeriod(getCurrentMonthYear()));
  }, [dispatch]);
  return (
    <div className={css.container}>
      <div className={css.column}>
        <h2 className={css.heading}>Statistics</h2>
        <PieChart
          data={data}
          expenseTotal={expenseTotal}
          incomeTotal={incomeTotal}
        />
      </div>

      <div className={css.column}>
        <StatisticsSelector />
        <StatisticsTable
          data={data}
          expenseTotal={expenseTotal}
          incomeTotal={incomeTotal}
        />
      </div>
    </div>
  );
}

export default Statistics;

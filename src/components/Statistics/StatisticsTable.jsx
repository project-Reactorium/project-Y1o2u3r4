import css from './StatisticsTable.module.css';

const StatisticsTable = ({ data, expenseTotal, incomeTotal }) => {
  return (
    <div>
      <div className={css.table_head}>
        <p>Category</p>
        <p>Sum</p>
      </div>
      <div className={css.list_wrapper}>
        <ul>
          {data.length
            ? data.map((category, index) => (
                <li key={index}>
                  <div className={css.item_wrapper}>
                    <p className={css.first_column}>
                      <span
                        className={css.span_indicator}
                        style={{ backgroundColor: `${category.color}` }}
                      ></span>
                      {category.name}
                    </p>

                    <p>{Math.abs(category.total).toFixed(2)}</p>
                  </div>
                </li>
              ))
            : ''}
        </ul>

        <div className={css.table_bottom}>
          <p>Expenses:</p>
          <span className={css.expense}>{Math.abs(expenseTotal).toFixed(2)}</span>
        </div>
        <div className={css.table_bottom}>
          <p>Income:</p>
          <span className={css.income}>{Math.abs(incomeTotal).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsTable;

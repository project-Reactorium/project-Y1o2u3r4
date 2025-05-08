import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CurrencyChart from "../currencyChart/CurrencyChart";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const balance = useSelector((state) => state.finance.totalBalance);
  const currencyList = useSelector((state) => state.currency.items);

  return (
    <aside className={styles.Wrapper}>
      <nav className={styles.NavSection}>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? `${styles.StyledLink} ${styles.StyledLinkActive}` : styles.StyledLink
          }
        >
          🏠 Home
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            isActive ? `${styles.StyledLink} ${styles.StyledLinkActive}` : styles.StyledLink
          }
        >
          📊 Statistics
        </NavLink>
      </nav>

      <div className={styles.InfoSection}>
        <div className={styles.BalanceBox}>
          <h4 className={styles.Title}>Bakiye</h4>
          <p className={styles.Amount}>{balance.toFixed(2)} ₺</p>
        </div>

        <div className={styles.CurrencyBox}>
          <h4 className={styles.Title}>Döviz</h4>
          <ul>
            {currencyList.slice(0, 3).map((item, index) => (
              <li key={index}>
                <strong>
                  {item.currencyCodeA}/{item.currencyCodeB}:
                </strong>{" "}
                {item.rateBuy?.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>

        <CurrencyChart data={currencyList.slice(0, 3)} />
      </div>
    </aside>
  );
};

export default Sidebar;

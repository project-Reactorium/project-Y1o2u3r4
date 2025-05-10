import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCurrency } from "../../redux/currencySlice";
import TransactionList from "../../components/transactionList/TransactionsList";
import ModalAddTransaction from "../../components/modalAddTransaction/ModalAddTransaction";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import TransactionChart from "../../components/transactionChart/TransactionChart";
import styles from "./DashboardPage.module.css";
import { fetchTransactions } from "../../redux/transactionOperations";
import { Outlet } from "react-router-dom";

const DashboardPage = () => {
  const [showModal, setShowModal] = useState(false);

  const balance = useSelector((state) => state.finance.totalBalance);
  const dispatch = useDispatch();
  const currencyList = useSelector((state) => state.currency.items);

  useEffect(() => {
    dispatch(fetchCurrency());
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <>
      <Header userName="" onLogout={() => console.log("exit")} />
      <div className={styles.PageWrapper}>
        <Sidebar />
        <div className={styles.HomeWrapper}>
          <div className={styles.RightColumn}>
            <Outlet />  
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;

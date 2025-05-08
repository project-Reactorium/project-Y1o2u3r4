import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCurrency } from "../../redux/currencySlice";
import TransactionList from "../../components/transactionList/TransactionsList";
import ModalAddTransaction from "../../components/modalAddTransaction/ModalAddTransaction";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import TransactionChart from "../../components/transactionChart/TransactionChart";
import styles from "./HomePage.module.css";
import { fetchTransactions } from "../../redux/transactionOperations";

const HomePage = () => {
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
      <Header userName="Serhat" onLogout={() => console.log("Çıkış")} />
      <div className={styles.PageWrapper}>
        <Sidebar />
        <div className={styles.HomeWrapper}>
          <div className={styles.RightColumn}>
            <div className={styles.TransactionContainer}>
              <TransactionList />
            </div>
            <button
              className={styles.AddButton}
              onClick={() => setShowModal(true)}
            >
              +
            </button>
            {showModal && (
              <ModalAddTransaction onClose={() => setShowModal(false)} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

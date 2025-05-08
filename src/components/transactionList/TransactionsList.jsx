import { useSelector } from "react-redux";
import TransactionItem from "../transactionItem/TransactionItem";
import styles from "./TransactionList.module.css";

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions.items);

  if (transactions.length === 0) {
    return <p className={styles.EmptyMessage}>No transactions found</p>;
  }

  return (
    <div className={styles.ListContainer}>
      <div className={styles.TableHeader}>
        <span>Date</span>
        <span>Type</span>
        <span>Category</span>
        <span>Comment</span>
        <span>Sum</span>
        <span>Actions</span>
      </div>
      {transactions.map((item) => (
        <TransactionItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TransactionList;

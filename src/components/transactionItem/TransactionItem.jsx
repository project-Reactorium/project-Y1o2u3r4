import styles from "./TransactionItem.module.css";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../redux/transactionSlice";
import { FaTrash } from "react-icons/fa";

const TransactionItem = ({ item }) => {
  const dispatch = useDispatch();

 
  const handleDelete = () => {
    dispatch(deleteTransaction({ id: item.id, amount: item.amount }));
  };
  

  const isIncome = item.amount > 0;

  return (
    <div
      className={`${styles.TransactionRow} ${
        isIncome ? styles.Income : styles.Expense
      }`}
    >
      <span>{item.date}</span>
      <span>{isIncome ? "Income" : "Expense"}</span>
      <span>{item.category}</span>
      <span>{item.comment}</span>
      <span>{item.amount.toFixed(2)} ₺</span>
      <button onClick={handleDelete} className={styles.DeleteButton}>
        <FaTrash />
      </button>
    </div>
  );
};

export default TransactionItem;

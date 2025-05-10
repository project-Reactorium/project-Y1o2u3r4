import AddTransactionForm from "../addTransactionForm/AddTransactionForm";
import styles from "./ModalAddTransaction.module.css";

const ModalAddTransaction = ({ onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>Add Transaction</h2>
        <AddTransactionForm onClose={onClose} />
        <button className={styles.closeButton} onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default ModalAddTransaction;

import AddTransactionForm from "../addTransactionForm/AddTransactionForm";
import styles from "./ModalAddTransaction.module.css";

const ModalAddTransaction = ({ onClose }) => {
  return (
    <div className={styles.Overlay} onClick={onClose}>
      <div className={styles.Modal} onClick={(e) => e.stopPropagation()}>
        <h2>Yeni işlem ekle</h2>
        <AddTransactionForm onClose={onClose} />
        <button className={styles.CloseButton} onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default ModalAddTransaction;

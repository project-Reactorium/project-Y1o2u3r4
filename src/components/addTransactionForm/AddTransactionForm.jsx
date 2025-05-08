import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addTransaction } from "../../redux/transactionSlice";
import styles from "./AddTransactionForm.module.css";

const schema = yup.object().shape({
  type: yup.string().required(),
  amount: yup
    .number()
    .typeError("Sayı girilmelidir")
    .positive()
    .required("Tutar zorunludur"),
  date: yup.string().required("Tarih zorunludur"),
  category: yup.string().required("Kategori zorunludur"),
  comment: yup.string(),
});

const AddTransactionForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      type: "expense",
      amount: "",
      date: "",
      category: "",
      comment: "",
    },
  });

  const onSubmit = (data) => {
    const newTransaction = { ...data, id: nanoid() };
    if (data.type === "expense") newTransaction.amount *= -1;

    dispatch(addTransaction(newTransaction));
    reset();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
      <label className={styles.Label}>
        Tür:
        <select {...register("type")}>
          <option value="expense">Gider</option>
          <option value="income">Gelir</option>
        </select>
      </label>

      <label className={styles.Label}>
        Tutar:
        <input type="number" {...register("amount")} />
        <span className={styles.Error}>{formState.errors.amount?.message}</span>
      </label>

      <label className={styles.Label}>
        Tarih:
        <input type="date" {...register("date")} />
        <span className={styles.Error}>{formState.errors.date?.message}</span>
      </label>

      <label className={styles.Label}>
        Kategori:
        <input type="text" {...register("category")} />
        <span className={styles.Error}>
          {formState.errors.category?.message}
        </span>
      </label>

      <label className={styles.Label}>
        Açıklama:
        <input type="text" {...register("comment")} />
      </label>

      <button type="submit">Ekle</button>
    </form>
  );
};

export default AddTransactionForm;

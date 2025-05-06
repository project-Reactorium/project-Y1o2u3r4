import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import styles from '../../components/RegisterForm/RegisterForm.module.css';

const RegisterPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;

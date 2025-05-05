import LoginForm from '../../components/LoginForm/LoginForm';
import styles from '../../components/RegisterForm/RegisterForm.module.css';


const LoginPage = () => {
  return (
    <div className={styles.mainContainer}>
          <div className={styles.contentContainer}>
        <LoginForm />
        </div>
        </div>
  );
};

export default LoginPage;
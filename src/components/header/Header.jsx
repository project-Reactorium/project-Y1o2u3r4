import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";

const Header = ({ userName }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/register");
  };

  return (
    <header className={styles.Wrapper}>
      <div className={styles.Left}>
        <img src={logo} alt="logo" className={styles.Logo} />
        {/* <span className={styles.BrandName}>Money Guard</span> */}
      </div>

      <div className={styles.Right}>
        <span className={styles.User}>{userName}</span>
        <button className={styles.ExitButton} onClick={handleLogout}>
          ⎋ Exit
        </button>
      </div>
    </header>
  );
};

export default Header;

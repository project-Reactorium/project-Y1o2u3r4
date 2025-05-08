import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors'; 
import LogOutModal from "../LogOutModal/LogOutModal";
import { useState } from "react";


const Header = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);
  

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const user = useSelector(selectUser);
  
  return (
    <header className={styles.Wrapper}>
      <div className={styles.Left}>
        <img src={logo} alt="logo" className={styles.Logo} />
        {/* <span className={styles.BrandName}>Money Guard</span> */}
      </div>

      <div className={styles.Right}>
        <span className={styles.User}>{user.username}</span>
        <button className={styles.ExitButton} onClick={handleLogoutClick}>
          ⎋ Exit
        </button>
      </div>
      {isModalOpen && <LogOutModal onClose={closeModal} />}
    </header>
  );
};

export default Header;

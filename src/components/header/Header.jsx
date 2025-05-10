import HeaderLogoSvg from "./HeaderLogoSvg";
import HeaderExitSvg from "./HeaderExitSvg";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useSelector } from 'react-redux';
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
    <header className={styles.wrapper}>
      <div>
        <Link to="/" className={styles.logo}>
          <HeaderLogoSvg />
          Money Guard
        </Link>
      </div>

      <div className={styles.right}>
        <span className={styles.user}>{user.username}</span>
        <button className={styles.exitButton} onClick={handleLogoutClick}>
          <HeaderExitSvg />
          <p className={styles.headerExit}>Exit</p>
        </button>
      </div>
      {isModalOpen && <LogOutModal onClose={closeModal} />}
    </header>
  );
};

export default Header;

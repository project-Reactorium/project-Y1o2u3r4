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
      <div className={styles.left}>
        <Link to="/" className={styles.logo}>
          <HeaderLogoSvg />
          Money Guard
        </Link>
        {/* <span className={styles.brandName}>Money Guard</span> */}
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

   return (
     <header className={styles.header}>
       <div className={styles.container}>
         <Link to="/" className={styles.logo}>
           <HeaderLogoSvg />
           Money Guard
         </Link>
         <div className={styles.userInfo}>
           <span className={styles.username}>
             {username ? username : 'Hello anonymous'}
           </span>
           <div>
             <button
               className={styles.logoutButton}
               onClick={handleLogoutClick}
             >
               <HeaderExitSvg />
               <p className={styles.headerExit}>Exit</p>
             </button>
           </div>
         </div>
         {isModalOpen && <LogOutModal onClose={closeModal} />}
       </div>
     </header>
   );




};

export default Header;

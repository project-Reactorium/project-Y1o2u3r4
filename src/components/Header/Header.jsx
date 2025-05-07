import css from "./Header.module.css";
import Icon from "../../Icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link to="/" className={css.logoRouter}>
          <Icon id="tab-desk-logo" className={css.tabDeskLogo} />
        </Link>

        <ul>
          <li>
            <p className={css.NameAndExit}>
              Hello Anonymous |
              <span className={css.exitWrapper}>
                <Icon id="exit-icon" className={css.exitLogo} />
                Exit
              </span>
            </p>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

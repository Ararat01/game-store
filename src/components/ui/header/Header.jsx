import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.navbar__logo}>
          Game Store
        </Link>
        <div className={styles.navbar__navs}>
          <a href="#games">Games</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

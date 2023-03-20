import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <h2 className={styles.navbar__logo}>Game Store</h2>
        <div className={styles.navbar__navs}>
          <a href="#games">Games</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

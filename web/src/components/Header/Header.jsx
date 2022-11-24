import styles from "./Header.module.css";
import Logo from '../../assets/logo.png'

export function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.img1} src={Logo} alt="Logo" />
    </div>
  );
}

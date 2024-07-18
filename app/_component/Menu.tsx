import styles from "../../styles/menu.module.css";

export default function Menu() {
  return (
    <ul className={styles.menuList}>
      <li>
        <span className={styles.menuLink}>클래스</span>
      </li>
      <li>
        <span className={styles.menuLink}>세미나</span>
      </li>
      <li>
        <span className={styles.menuLink}>아티클</span>
      </li>
      <li>
        <span className={styles.menuLink}>이벤트</span>
      </li>
    </ul>
  );
}

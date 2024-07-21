import styles from "../../styles/menu.module.css";

export default function Accounts() {
  return (
    <ul className={`${styles.menuList} ${styles.accountList}`}>
      <li>
        <span className={styles.menuLink}>회원가입</span>
      </li>
      <li>
        <span className={styles.menuLink}>로그인</span>
      </li>
    </ul>
  );
}

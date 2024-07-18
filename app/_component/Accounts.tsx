import menuStyles from "../../styles/menu.module.css";
export default function Accounts() {
  return (
    <ul className={menuStyles.menuList}>
      <li>
        <span className={menuStyles.menuLink}>회원가입</span>
      </li>
      <li>
        <span className={menuStyles.menuLink}>로그인</span>
      </li>
    </ul>
  );
}

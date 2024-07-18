import Menu from "./Menu";
import Accounts from "./Accounts";
import styles from "../../styles/nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.container}>
      <div className={styles.inner}>
        <Menu />
        <Accounts />
      </div>
    </nav>
  );
}

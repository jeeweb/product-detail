import { IconCart } from "./icons/IconCart";
import SearchBox from "./SearchBox";
import styles from "../../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>한빛앤</h1>
      <SearchBox />
      <button className={styles.btnCart}>
        <IconCart />
      </button>
    </header>
  );
}

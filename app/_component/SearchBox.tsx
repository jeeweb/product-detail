import styles from "../../styles/searchBox.module.css";
import { IconSearch } from "./icons/IconSearch";

export default function SearchBox() {
  return (
    <div className={styles.box}>
      <input
        type="text"
        placeholder="Search"
        className={styles.inputTextSearch}
      />
      <button className={styles.btnSearch}>
        <IconSearch />
      </button>
    </div>
  );
}

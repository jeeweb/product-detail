import styles from "../../styles/buttonTop.module.css";
import { IconArrowTop } from "./icons/IconArrow";

export default function ButtonTop() {
  const scrollToTop = (event: React.MouseEvent) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={scrollToTop} value="scrollToTop" className={styles.btnTop}>
      <IconArrowTop />
    </button>
  );
}

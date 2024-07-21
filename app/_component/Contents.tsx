import styles from "../../styles/contents.module.css";
import Courses from "./Courses";
import Introduction from "./Introduction";
import Lecturer from "./Lecturer";
import OtherContents from "./OtherContents";
import RefundPolicy from "./RefundPolicy";
import Reviews from "./Reviews";

export default function Contents() {
  return (
    <div className={styles.container}>
      <div className={styles.indicatorGroup}>
        <button className={`${styles.indicatorItem} ${styles.itemOn}`}>
          소개
        </button>
        <button className={styles.indicatorItem}>강사</button>
        <button className={styles.indicatorItem}>목차</button>
        <button className={styles.indicatorItem}>연관콘텐츠</button>
        <button className={styles.indicatorItem}>리뷰</button>
      </div>
      <Introduction />
      <Lecturer />
      <Courses />
      <OtherContents />
      <Reviews />
      <RefundPolicy />
    </div>
  );
}

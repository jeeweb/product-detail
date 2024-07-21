import ButtonTop from "./ButtonTop";
import styles from "../../styles/summary.module.css";

export default function Summary() {
  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <p className={styles.courseName}>
          10일 만에 배우는 플러터: 초보자를 위한 실전 앱 개발 프로젝트
        </p>
        <ButtonTop />
      </div>
    </div>
  );
}

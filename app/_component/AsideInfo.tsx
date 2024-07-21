import styles from "../../styles/asideInfo.module.css";
import { MAX_MIN } from "../constants";
import { IconCart } from "./icons/IconCart";
import { IconFacebook, IconKakao, IconNaver, IconX } from "./icons/Logos";
import { IconLink } from "./icons/IconLink";

interface CourseInfo {
  price: number;
  category: string;
  lecturer: string;
  totalVideos: number;
  videoContentLength: number;
  timeLimit?: number;
  recommendPeriod: number;
}

const mockData: CourseInfo = {
  price: 33000,
  category: "IT 입문",
  lecturer: "이정주",
  totalVideos: 10,
  videoContentLength: 184,
  recommendPeriod: 30,
};

const convertTime = (value: number) => {
  const hours = Math.floor(value / MAX_MIN);
  const minutes = value % MAX_MIN;
  return `${hours}시간 ${minutes}분`;
};

export default function AsideInfo(isFix: { isFix: boolean }) {
  return (
    <section
      className={
        isFix ? `${styles.container} ${styles.containerFix}` : styles.container
      }
    >
      <p className={styles.price}>₩{mockData.price.toLocaleString("ko-KR")}</p>
      <div className={styles.orderGroup}>
        <button className={styles.btnCart}>
          <IconCart />
        </button>
        <button className={styles.btnPayment}>바로 결제</button>
      </div>
      <ul className={styles.infoList}>
        <li className={styles.infoItem}>카테고리: {mockData.category}</li>
        <li className={styles.infoItem}>강사명: {mockData.lecturer}</li>
        <li className={styles.infoItem}>
          총 강의 수: {mockData.totalVideos}강
        </li>
        <li className={styles.infoItem}>
          총 강의 길이: {convertTime(mockData.videoContentLength)}
        </li>
        <li className={styles.infoItem}>
          보관기간: {mockData.timeLimit ? mockData.timeLimit : "제한없음"}
        </li>
        <li className={styles.infoItem}>
          수강 권장 기간: {mockData.recommendPeriod}일
        </li>
      </ul>
      <ul className={styles.shareList}>
        <li>
          <button className={styles.shareLink}>
            <IconKakao />
          </button>
        </li>
        <li>
          <button className={styles.shareLink}>
            <IconNaver />
          </button>
        </li>
        <li>
          <button className={styles.shareLink}>
            <IconFacebook />
          </button>
        </li>
        <li>
          <button className={styles.shareLink}>
            <IconX />
          </button>
        </li>
        <li>
          <button className={styles.shareLink}>
            <IconLink />
          </button>
        </li>
      </ul>
    </section>
  );
}

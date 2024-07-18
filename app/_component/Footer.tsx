import styles from "../../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.inner}>
          <div className={styles.logo}>한빛앤</div>
          <ul className={styles.menuList}>
            <li>
              <span className={styles.menuLink}>공지사항</span>
            </li>
            <li>
              <span className={styles.menuLink}>서비스 소개</span>
            </li>
            <li>
              <span className={styles.menuLink}>강사 지원</span>
            </li>
            <li>
              <span className={styles.menuLink}>고객 지원</span>
            </li>
            <li>
              <span className={styles.menuLink}>이용약관</span>
            </li>
            <li>
              <span className={styles.menuLink}>개인정보처리방침</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.inner}>
          <address>
            한빛앤(주) ㅣ대표이사 : 임백준
            <br />
            서울특별시 서대문구 연희로 2길 76 (창천동, 한빛빌딩)
            <br />
            사업자등록번호 : 353-87-02918​
            <br />
            통신판매업신고 : 2024-서울서대문-0847호
            <br />
            개인정보 보호 책임자 : 노경석 | 02-325-0384
            <br />
          </address>
          <div>
            모든 거래에 대한 책임과 환불 민원등의 처리는 한빛앤 주식회사에서
            진행합니다.
            <br />
            자세한 문의는 Email : info@hanbitn.com, 유선 : 02-2128-8475 으로
            가능합니다.
          </div>
          <div>&copy; HanbitN. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

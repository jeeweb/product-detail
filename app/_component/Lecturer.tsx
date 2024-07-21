import styles from "../../styles/contents.module.css";

export default function Lecturer() {
  return (
    <article className={styles.lecturer}>
      <h4 className={styles.title}>강사 소개</h4>
      <h5 className={styles.subTitle}>이정주</h5>
      <p>
        현재 요양 분야 스타트업인 (주)펴나니에서 웹 프론트엔드 개발 및 플러터를
        사용한 앱 개발을 담당하고 있으며, 치매 진단 앱, 펴나니 앱 등을
        출시했습니다.
      </p>
      <p>
        melos를 통한 플러터 모노레포 구성, MethodChannel을 통한 네이티브 코드
        처리, 앱으로 바로 연결되는 링크인 딥링크 구현 등에 관심을 가지고
        있습니다.
      </p>
      <div className={styles.experience}>
        <span className={styles.detailTitle}>경력</span>
        <p>현) (주) 펴나니 개발본부 사원</p>
        <p>전) 카카오엔터프라이즈 Technical Writer 인턴</p>
      </div>
      <div className={styles.experience}>
        <span className={styles.detailTitle}>저서</span>
        <p>『초보자도 프로처럼 만드는 플러터 앱 개발』(디코딩, 2023)</p>
      </div>
    </article>
  );
}

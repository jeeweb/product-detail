import styles from "../../styles/banner.module.css";

export default function Banner() {
  const tempImg = {
    url: `https://images.unsplash.com/photo-1533022139390-e31c488d69e2?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    description: "다양한 어플리케이션이 있는 휴대폰 화면",
  };

  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div>
          <h3 className={styles.title}>
            10일 만에 배우는 플러터: 초보자를 위한 실전 앱 개발 프로젝트
          </h3>
          <ul className={styles.tagList}>
            <li className={styles.tag}>
              <button>Android</button>
            </li>
            <li className={styles.tag}>
              <button>iOS</button>
            </li>
            <li className={styles.tag}>
              <button>크로스플랫폼</button>
            </li>
          </ul>
        </div>
        <div className={styles.thumbImage}>
          <img src={tempImg.url} alt={tempImg.description} />
        </div>
      </div>
    </section>
  );
}

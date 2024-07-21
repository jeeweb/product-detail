import styles from "../../styles/contents.module.css";

const mockData = {
  reviews: [
    {
      username: "홍길동",
      grade: 5,
      opinion: "아주 굿입니다!",
      createdAt: "2024.07.20",
      reply: [
        {
          isLecturer: true,
          username: "이정주",
          opinion: "감사합니다!",
          createdAt: "2024.07.21",
        },
      ],
    },
    {
      username: "John Doe",
      grade: 3,
      opinion: `플러터 전문가가 되고싶네요\n감사합니다!`,
      createdAt: "2024.07.21",
    },
  ],
  courses: [
    {
      type: "video",
      title: "플러터 개요 및 특징",
      isPreview: true,
      link: "/",
      duration: "07:07",
    },
    {
      type: "video",
      title: "플러터 개발 환경 설정",
      isPreview: false,
      duration: "22:05",
    },
    {
      type: "video",
      title: "플러터의 시작과 끝: 위젯(Widget)",
      isPreview: false,
      duration: "13:50",
    },
    {
      type: "video",
      title:
        "정적인 앱에서 동적인 앱으로: 상태(State)와 상태 관리(State Management)",
      isPreview: false,
      duration: "13:38",
    },
    {
      type: "video",
      title: "좀더 다채로운 앱으로: 여러 페이지를 가진 앱 만들기",
      isPreview: false,
      duration: "08:00",
    },
    {
      type: "video",
      title: "앱 바깥의 세계로: 네트워크 통신하기",
      isPreview: false,
      duration: "12:08",
    },
    {
      type: "video",
      title: "앱 바깥의 세계로: 하드웨어와 관련된 기능 사용하기",
      isPreview: false,
      duration: "24:56",
    },
    {
      type: "video",
      title: "더 견고한 앱으로: 간단한 통합 테스트 구현하기",
      isPreview: false,
      duration: "08:48",
    },
    {
      type: "video",
      title: "스토어에 앱 배포하기",
      isPreview: false,
      duration: "13:42",
    },
    {
      type: "video",
      title: "실전! 앱 개발 프로젝트",
      isPreview: false,
      duration: "59:49",
    },
  ],

  otherContents: [
    {
      title: "초보자도 프로처럼 만드는 플러터 앱 개발",
      img: "https://www.decoding.co.kr/wp-content/uploads/2023/02/%ED%94%8C%EB%9F%AC%ED%84%B0-%EC%95%9E%ED%91%9C%EC%A7%80.jpg",
      author: "이정주",
      publisher: "디코딩",
      publishedAt: 2023,
    },
  ],
};

export default function OtherContents() {
  return (
    <article className={styles.otherContents}>
      <h4 className={styles.title}>함께 보면 좋아요!</h4>
      <div className={styles.othersListWrap}>
        <ul className={styles.othersList}>
          {mockData.otherContents.map((content, idx) => (
            <li key={content.publishedAt + idx} className={styles.othersItem}>
              <div className={styles.othersItemImg}>
                <img src={content.img} />
              </div>
              <p className={styles.othersItemTitle}>{content.title}</p>
              <p
                className={styles.othersItemInfo}
              >{`${content.author} 저 | ${content.publisher} | ${content.publishedAt}`}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

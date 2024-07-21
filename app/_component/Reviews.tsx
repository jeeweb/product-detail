import styles from "../../styles/contents.module.css";
import { IconStarFilled } from "./icons/IconStar";

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

export default function Reviews() {
  return (
    <article className={styles.reviews}>
      <h4 className={styles.title}>리뷰</h4>
      <div className={styles.reviewList}>
        {/* (추가하기) 리뷰 제한된 수만큼 보이고 그 이상은 더보기 버튼으로 load 혹은 pagination */}
        {mockData.reviews.length > 0 ? (
          mockData.reviews.map((review, idx) => (
            <div key={review.createdAt + idx} className={styles.reviewItem}>
              <div className={styles.reviewAuthor}>
                {/* avatar */}
                <span className={styles.reviewName}>{review.username}</span>
              </div>
              <div className={styles.reviewStars}>
                {[...Array(review.grade)].fill(<IconStarFilled />)}
                <span className={styles.reviewDate}>{review.createdAt}</span>
              </div>
              <div className={styles.reviewText}>
                <pre>{review.opinion}</pre>
              </div>
              {review.reply
                ? review.reply.map((item, idx) => (
                    <div
                      key={item.createdAt + idx}
                      className={styles.reviewReply}
                    >
                      <div className={styles.reviewReplyAuthor}>
                        {item.isLecturer ? (
                          <span className={styles.badgeLecturer}>강사</span>
                        ) : (
                          ""
                        )}
                        <span className={styles.reviewName}>
                          {item.username}
                        </span>
                        <span className={styles.reviewDate}>
                          {item.createdAt}
                        </span>
                      </div>
                      <div className={styles.reviewText}>
                        <pre>{item.opinion}</pre>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          ))
        ) : (
          <p>
            아직 작성된 후기가 없습니다. 후기를 남겨주세요. 50 포인트가
            적립됩니다.
          </p>
        )}
      </div>
      <p className={styles.reviewNotice}>
        후기는 직접 결제(유료/무료/쿠폰)하신 분들만 남길 수 있습니다.
      </p>
    </article>
  );
}

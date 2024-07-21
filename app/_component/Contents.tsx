import styles from "../../styles/contents.module.css";
import { IconPlay } from "./icons/IconPlay";
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
      <article className={styles.introduction}>
        <h4 className={styles.title}>기초부터 배우는 실전형 플러터 앱 개발</h4>
        <h5 className={styles.subTitle}>
          현직 플러터 앱 개발자와 함께 하는 실전형 클래스!
          <br />
          이론, 기획, 배포까지 한번에 끝내는 플러터 앱 개발
        </h5>
        <p>
          플러터(Flutter)는 구글이 개발하고 지원하는 크로스 플랫폼 애플리케이션
          프레임워크입니다. 이 프레임워크는 오픈소스로 누구나 쉽고 빠르게 앱을
          개발할 수 있도록 도와주죠. 하나의 코드베이스로 안드로이드와 iOS 앱을
          동시에 출시할 수 있어 앱 개발 시간과 비용을 대폭 줄여주기도 합니다.
          <br />
          <br />
          장점이 많기 때문에 많은 기업에서 활용하고 있습니다. 예를 들면 네이버는
          2019년부터 네이버 지식iN, 네이버 블로그 등의 자사 앱을 플러터로 바꾸고
          있죠. 이 밖에도 많은 회사들이 플러터로 앱을 개발하기 위해 플러터
          개발자를 찾고 있습니다. 최근에는 입문자들에게 파이썬(Python) 다음으로
          추천하는 인기 언어가 되기도 했죠.
          <br />
          <br />
          하지만 쉽게 시작할 수 있다고 쉽게 학습할 수 있는 것은 아닙니다. 앱
          개발을 처음 시작하는 이들에게는 막막할 수도 있고, 혼자 공부하다보면
          모르고 지나치게 되는 것들이 많을 수밖에 없습니다.
          <br />
          <br />이 클래스는 그런 분들을 위해 준비했습니다. 플러터 앱 개발 전체
          과정을 따라하며 실습할 수 있도록 기획되었습니다. 『초보자도 프로처럼
          만드는 플러터앱 개발』 의 저자 이정주 강사님과 함께 플러터를 배우고
          전문성을 높여 보세요. 이 클래스와 함께라면 당신도 멋진 앱을 만드는
          전문가가 될 수 있습니다.
        </p>
        <h4 className={styles.title}>무엇을 배우는 클래스인가요?</h4>
        <p>
          이 클래스는 플러터를 처음 접하는 초보자를 대상으로 기획됐습니다.
          플러터의 기본 개념과 특징을 설명하고, 앱 개발 환경 설정, 다양한 위젯
          사용법, 상태 관리, 네트워크 통신, 하드웨어 기능 구현, 테스트, 그리고
          앱 배포까지 플러터를 활용한 앱 개발의 모든 과정을 담았습니다.
          <br />
          <br />이 클래스와 함께 플러터 앱 개발을 따라하다 보면 플러터의 이론,
          기능, 사용법을 두루 익힐 수 있으며 최종적으로 앱을 스토어에 출시할 수
          있게 됩니다.
        </p>
        <h4 className={styles.title}>누구를 위한 클래스인가요?</h4>
        <p>
          프로그래밍에 입문한 모바일 앱 개발에 관심 있는 초보자
          <br />
          웹 개발 경험이 있지만 모바일 앱 개발 경험이 부족한 개발자
          <br />
          기술 기반 스타트업을 준비 중이거나 이미 창업한 창업자
        </p>
        <h4 className={styles.title}>클래스를 수료하고 나면?</h4>
        <p>
          플러터 프레임워크를 통해 모바일 앱을 개발하는 기초적인 지식을 습득할
          수 있습니다.
          <br />
          실제 앱을 개발하면서 프로그래밍 스킬을 향상시키고 문제 해결 능력을
          향상시킬 수 있습니다. <br />한 번의 개발로 모두에게 동시에 앱을 제공할
          수 있는 크로스 플랫폼 개발 능력을 향상시킬 수 있습니다.
        </p>
      </article>
      <article className={styles.lecturer}>
        <h4 className={styles.title}>강사 소개</h4>
        <h5 className={styles.subTitle}>이정주</h5>
        <p>
          현재 요양 분야 스타트업인 (주)펴나니에서 웹 프론트엔드 개발 및
          플러터를 사용한 앱 개발을 담당하고 있으며, 치매 진단 앱, 펴나니 앱
          등을 출시했습니다.
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

      <article className={styles.courses}>
        <h4 className={styles.title}>목차</h4>
        <ul className={styles.courseList}>
          {mockData.courses.map((course, idx) => (
            <li key={idx} className={styles.courseItem}>
              {course.type === "video" ? <IconPlay /> : ""}
              {course.isPreview ? (
                <>
                  <span className={`${styles.courseTitle} ${styles.itemOn}`}>
                    {course.title}
                  </span>
                  <span className={styles.badgePreview}>미리보기</span>
                </>
              ) : (
                <span className={styles.courseTitle}>{course.title}</span>
              )}
              <span>{course.duration}</span>
            </li>
          ))}
        </ul>
      </article>

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
      <article className={styles.reviews}>
        <h4 className={styles.title}>리뷰</h4>
        <div className={styles.reviewList}>
          {/* (추가하기) 리뷰 제한된 수만큼 보이고 그 이상은 더보기 버튼으로 load 혹은 pagination */}
          {mockData.reviews.length > 0 ? (
            mockData.reviews.map((review, idx) => (
              <div key={idx} className={styles.reviewItem}>
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
                      <div key={idx} className={styles.reviewReply}>
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
      <article className={styles.refundPolicy}>
        <h4 className={styles.title}>환불정책</h4>
        <p>
          한빛앤은 평생교육법에 의거 원격평생교육시설로 운영되고 있으며, 다음과
          같이 환불이 가능합니다.
        </p>
        <ul className={styles.policyList}>
          <li className={styles.policyItem}>
            <span className={styles.detailTitle}>1. 콘텐츠 이용 기간</span>
            <div>
              환불을 요청하기 위해서는 &lt;콘텐츠 이용 권장 기간&gt; 이내에
              요청하셔야 합니다.
              <br />
              콘텐츠 이용 권장 기간은 구매일로부터 30일까지며, 콘텐츠 이용 권장
              기간이 초과한 콘텐츠의 경우는 환불이 불가합니다.
            </div>
          </li>
          <li className={styles.policyItem}>
            <span className={styles.detailTitle}>2. 환불 기준</span>
            <div>
              2-1. 전액 환불
              <br />
              환불 요청일 기준, 구매일로부터 7일 이내이고 콘텐츠를 이용하지
              않았을 경우 전액 환불
              <br />
              (단, 콘텐츠를 이용하였을 경우 부분 환불 정책에 따라 환불)
              <br />
              2-2. 부분 환불
              <br />
              환불 요청일 기준, 콘텐츠 권장이용기간 1/3 경과 전(10일)인 경우 ㅡ
              고객 결제가의 2/3 환불
              <br />
              환불 요청일 기준, 콘텐츠 권장이용기간 1/2 경과 전(15일) ㅡ 고객
              결제가의 1/2 환불
              <br />
              환불 요청일 기준, 콘텐츠 권장이용기간 1/2 초과 후(15일) ㅡ
              환불금액 없음
              <br />
            </div>
          </li>
          <li className={styles.policyItem}>
            <span className={styles.detailTitle}>3. 환불 절차</span>
            <div>
              환불은 일대일 문의를 통해 진행됩니다. 환불을 원하는 콘텐츠
              정보(구매일자, 구매 콘텐츠명, 주문번호 등)를 일대일 문의를 통해
              전달해주시면, 담당자가 콘텐츠 이용 여부, 콘텐츠 이용 권장 잔여
              기간 등을 확인한 후 환불을 진행해드립니다.
              <br />
              담당자 확인 및 회신까지 영업일 기준 2~3일 가량 소요될 수 있습니다.
            </div>
          </li>
          <li className={styles.policyItem}>
            <span className={styles.detailTitle}>4. 유의사항</span>
            <div>
              콘텐츠 이용 권장 기간은 콘텐츠 구매 시점부터 시작됩니다.
              <br />
              환불은 고객의 실결제액 기준으로 진행되며 콘텐츠 구매 시점에 사용한
              할인 코드 등의 프로모션 혜택은 복원되지 않습니다.
              <br />
              콘텐츠 구매 시 사용한 포인트는 복원 가능합니다.
              <br />
              (전액 환불인 경우 사용한 포인트 기준 전액 복원, 부분 환불인 경우
              사용 포인트 기준 부분 환불)
            </div>
          </li>
        </ul>
      </article>
    </div>
  );
}

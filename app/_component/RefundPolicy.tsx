import styles from "../../styles/contents.module.css";

export default function RefundPolicy() {
  return (
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
            환불 요청일 기준, 구매일로부터 7일 이내이고 콘텐츠를 이용하지 않았을
            경우 전액 환불
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
            환불 요청일 기준, 콘텐츠 권장이용기간 1/2 초과 후(15일) ㅡ 환불금액
            없음
            <br />
          </div>
        </li>
        <li className={styles.policyItem}>
          <span className={styles.detailTitle}>3. 환불 절차</span>
          <div>
            환불은 일대일 문의를 통해 진행됩니다. 환불을 원하는 콘텐츠
            정보(구매일자, 구매 콘텐츠명, 주문번호 등)를 일대일 문의를 통해
            전달해주시면, 담당자가 콘텐츠 이용 여부, 콘텐츠 이용 권장 잔여 기간
            등을 확인한 후 환불을 진행해드립니다.
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
  );
}

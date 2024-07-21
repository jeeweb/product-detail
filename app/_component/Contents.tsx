import { useRef } from "react";
import styles from "../../styles/contents.module.css";
import Courses from "./Courses";
import Introduction from "./Introduction";
import Lecturer from "./Lecturer";
import OtherContents from "./OtherContents";
import RefundPolicy from "./RefundPolicy";
import Reviews from "./Reviews";

export default function Contents() {
  const scrollRef = useRef<any>([]);
  const scrollToArticle = (event: any) => {
    const value = event.target.value;
    let position;
    switch (value) {
      case "indicator":
        position = scrollRef.current[0].getBoundingClientRect().top - 140;
        window.scrollTo({ top: position, behavior: "smooth" });
        break;
      case "lecturer":
        position = scrollRef.current[1].getBoundingClientRect().top - 140;
        window.scrollTo({ top: position, behavior: "smooth" });
        break;
      case "courses":
        position = scrollRef.current[2].getBoundingClientRect().top - 140;
        window.scrollTo({ top: position, behavior: "smooth" });
        break;
      case "otherContents":
        position = scrollRef.current[3].getBoundingClientRect().top - 140;
        window.scrollTo({ top: position, behavior: "smooth" });
        break;
      case "reviews":
        position = scrollRef.current[4].getBoundingClientRect().top - 140;
        window.scrollTo({ top: position, behavior: "smooth" });
        break;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.indicatorGroup}>
        <button
          className={`${styles.indicatorItem} ${styles.itemOn}`}
          value="introduction"
          onClick={scrollToArticle}
        >
          소개
        </button>
        <button
          className={styles.indicatorItem}
          value="lecturer"
          onClick={scrollToArticle}
        >
          강사
        </button>
        <button
          className={styles.indicatorItem}
          value="courses"
          onClick={scrollToArticle}
        >
          목차
        </button>
        <button
          className={styles.indicatorItem}
          value="otherContents"
          onClick={scrollToArticle}
        >
          연관콘텐츠
        </button>
        <button
          className={styles.indicatorItem}
          value="reviews"
          onClick={scrollToArticle}
        >
          리뷰
        </button>
      </div>
      <div ref={(el: any) => (scrollRef.current[0] = el)}>
        <Introduction />
      </div>
      <div ref={(el: any) => (scrollRef.current[1] = el)}>
        <Lecturer />
      </div>
      <div ref={(el: any) => (scrollRef.current[2] = el)}>
        <Courses />
      </div>
      <div ref={(el: any) => (scrollRef.current[3] = el)}>
        <OtherContents />
      </div>
      <div ref={(el: any) => (scrollRef.current[4] = el)}>
        <Reviews />
      </div>
      <RefundPolicy />
    </div>
  );
}

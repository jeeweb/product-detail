"use client";

import styles from "../styles/detail.module.css";
import AsideInfo from "./_component/AsideInfo";
import Banner from "./_component/Banner";
import Contents from "./_component/Contents";
import Summary from "./_component/Summary";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [showSummary, setShowSummary] = useState(false);
  const [fixAsideInfo, setfixAsideInfo] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    //console.log("scrollY", scrollY);
    if (scrollY >= 300) {
      setfixAsideInfo(true);
      setShowSummary(true);
    } else {
      setfixAsideInfo(false);
      setShowSummary(false);
    }
  }, []);

  return (
    <>
      {showSummary ? <Summary /> : ""}
      <Banner />
      <div className={styles.container}>
        <AsideInfo isFix={fixAsideInfo} />
        <Contents />
      </div>
    </>
  );
}

import styles from "../styles/detail.module.css";
import AsideInfo from "./_component/AsideInfo";
import Banner from "./_component/Banner";
import Contents from "./_component/Contents";

export default function Home() {
  return (
    <>
      <Banner />
      <div className={styles.container}>
        <Contents />
        <AsideInfo />
      </div>
    </>
  );
}

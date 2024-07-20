import Header from "./_component/Header";
import Nav from "./_component/Nav";
import Footer from "./_component/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css";
import styles from "../styles/common.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "한빛앤",
    template: "%s | 한빛앤",
  },
  description:
    "한빛앤은 학습이 필요한 분들이 어디서나 이용할 수 있는 디지털 콘텐츠를 만듭니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Nav />
        <div className={styles.pageContainer}>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

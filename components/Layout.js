import Head from "next/head";

import HeaderPage from "./Header";
import FooterPage from "./Footer";
import styles from "../styles/Layout.module.css";
export default function Layout({ title, keywords, description,children }) {

  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <HeaderPage />
      <div>{children}</div>
      <FooterPage />
    </div>
  );
}

Layout.defaultProps = {
  title: " Test Task - Corner Case",
  description: "Online Radio Application",
  keywords: "radio, online radio, Putin FM, Dribbble FM, Doge FM, Ballads FM, Maximum FM",
};
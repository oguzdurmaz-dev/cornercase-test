import styles from "@/styles/Footer.module.css";
import { useContext } from "react";
import AppContext from "@/context/AppContext";

export default function FooterPage() {
  const { currentStation } = useContext(AppContext);
  return (
    <div className={styles.footer}>
      {currentStation ? (
        <>
          <span className={styles.subHead}>CURRENTLY PLAYING</span>
          <h4 className={styles.current}>{currentStation.name}</h4>
        </>
      ) : null}
    </div>
  );
}

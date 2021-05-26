import styles from "@/styles/HeaderPage.module.css";
import Image from "next/image";
import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Volume from "@/components/Volume";
export default function HeaderPage() {
  const { setCurrentStation, visibility } = useContext(AppContext);

  const onClickHandler = (e) => {
    e.preventDefault();
    setCurrentStation(null);
  };

  return (
    <div className={styles.header}>
      <a href="#" onClick={onClickHandler}>
        <Image src="/images/previous_arrow.png" width="28" height="48" />
      </a>

      <h1>{visibility === true ? <Volume /> : "STATION"}</h1>

      <a href="#">
        <Image src="/images/logout.png" width="44" height="52" />
      </a>
    </div>
  );
}

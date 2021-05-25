import Image from "next/image";
import styles from "@/styles/StationItem.module.css";
import { useState, useContext } from "react";
import AppContext from "@/context/AppContext";
export default function StationItem({ station }) {
  const { currentStation, setCurrentStation } = useContext(AppContext);
  console.log(currentStation);
  const onClickHandler = (e) => {
    e.preventDefault();
    setCurrentStation(station.name);
  };

  return (
    <>
      <li>
        <a href="#" onClick={onClickHandler}>
          {station.name}
          <span>{station.frequency}</span>
        </a>
        <div className={styles.controlPanel}>
          <button className={`${styles.countDown} ${styles.counter}`}></button>
          <Image src="/images/radio_img.png" width="288" height="288" />
          <button className={`${styles.countUp} ${styles.counter}`}></button>
        </div>
      </li>
    </>
  );
}

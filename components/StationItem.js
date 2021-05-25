import Image from "next/image";
import styles from "@/styles/StationItem.module.css";
import { useContext } from "react";
import AppContext from "@/context/AppContext";
export default function StationItem({ station }) {
  const { currentStation, setCurrentStation } = useContext(AppContext);

  const onClickHandler = (e) => {
    e.preventDefault();
    setCurrentStation(station);
    currentStation &&
      currentStation.id === station.id &&
      setCurrentStation(null);
  };

  const classSettings = (_) => {
    currentStation && currentStation.id === station.id
      ? styles.orderFirst
      : station.id === 1 && currentStation !== station.id
      ? "orderLast"
      : null;
  };

  return (
    <>
      <li
        className={classSettings}
        style={
          currentStation && currentStation.id !== station.id
            ? { 'order': station.id }
            : null
        }
      >
        <a href="#" onClick={onClickHandler}>
          {station.name}
          <span>{station.frequency}</span>
        </a>
        {currentStation && currentStation.id === station.id ? (
          <div className={styles.controlPanel}>
            <button
              className={`${styles.countDown} ${styles.counter}`}
            ></button>
            <Image src="/images/radio_img.png" width="288" height="288" />
            <button className={`${styles.countUp} ${styles.counter}`}></button>
          </div>
        ) : null}
      </li>
    </>
  );
}

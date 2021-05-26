import Image from "next/image";
import styles from "@/styles/StationItem.module.css";
import { useContext, useState } from "react";
import AppContext from "@/context/AppContext";

export default function StationItem({ station }) {

  const { currentStation, setCurrentStation, volume, setVolume,setVisibility } =
    useContext(AppContext);


  const onClickHandler = (e) => {
    e.preventDefault();
    setCurrentStation(station);
    currentStation &&
      currentStation.id === station.id &&
      setCurrentStation(null);
  };

  const setVolumeUpHandler = async (e) => {
    e.preventDefault();
    volumeUp();
    setTimeout(() => setVisibility(false), 2000);
  };

  const setVolumeDownHandler = async (e) => {
    e.preventDefault();
    volumeDown();
    setTimeout(() => setVisibility(false), 3000);
  };

  const volumeUp = (_) => {
    setVolume(volume + 1);
    setVisibility(true);
  };

  const volumeDown = (_) => {
    setVolume(volume - 1);
    setVisibility(true);
  };

  return (
    <>
      
      <li
        style={
          currentStation && currentStation.id !== station.id
            ? { order: station.id }
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
              onClick={setVolumeDownHandler}
              className={`${styles.countDown} ${styles.counter}`}
            ></button>
            <div>
              <Image src="/images/radio_img.png" width="288" height="288" />
            </div>
            <button
              onClick={setVolumeUpHandler}
              className={`${styles.countUp} ${styles.counter}`}
            ></button>
          </div>
        ) : null}
      </li>
    </>
  );
}

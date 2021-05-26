import Image from "next/image";
import styles from "@/styles/StationItem.module.css";
import {useContext,useState} from "react";
import AppContext from "@/context/AppContext";
export default function StationItem({ station }) {
  const { currentStation, setCurrentStation } = useContext(AppContext);
  const [volume,setVolume]=useState(50);

  const onClickHandler = (e) => {
    e.preventDefault();
    setCurrentStation(station);
    currentStation &&
      currentStation.id === station.id &&
      setCurrentStation(null);
 
  };



  const volumeUp=_=>{
  setVolume(volume+1)
  }
  const volumeDown=_=>{
    setVolume(volume-1)
    }
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
            <button onClick={volumeDown} 
              className={`${styles.countDown} ${styles.counter}`}
            ></button>
            <div>
            <Image src="/images/radio_img.png" width="288" height="288" />
            <p>{volume}</p>
            </div>
            <button onClick={volumeUp} className={`${styles.countUp} ${styles.counter}`}></button>
          </div>
        ) : null}
      </li>
    </>
  );
}

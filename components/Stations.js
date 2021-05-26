import styles from "@/styles/StationsPage.module.css";
import StationItem from "@/components/StationItem";
export default function StationsPage({ stations }) {
  return (
    <div className={styles.stationsContainer}>
      <ul className={styles.stationList}>
        {stations.map((station) => (
          <StationItem key={station.id} station={station} />
        ))}
      </ul>
    </div>
  );
}

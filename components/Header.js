import styles from "@/styles/HeaderPage.module.css";
import Link from "next/link";
import Image from "next/image";
export default function HeaderPage() {
  return (
    <div className={styles.header}>
      <Link href="#">
        <a>
          <Image src="/images/previous_arrow.png" width="28" height="48" />
        </a>
      </Link>
      <h1>STATIONS</h1>
      <Link href="#">
        <a>
          <Image src="/images/logout.png" width="44" height="52" />
        </a>
      </Link>
    </div>
  );
}

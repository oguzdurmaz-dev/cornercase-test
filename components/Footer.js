import styles from "@/styles/Footer.module.css"
import { useContext } from "react";
import AppContext from "@/context/AppContext";

export default function FooterPage() {  
    const { currentStation } = useContext(AppContext); 
    return (
        <div className={styles.footer}>
          
         
      

        </div>
    )
}

import styles from "./footer.module.css";
import React from "react";
import logo from "../../assests/logo.png";
import instagram from "../../assests/instagram.png";

export default function Footer() {
  return (
    <div className={styles.footerwrapper}>

       <div className={styles.footerblock}> 
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      <div className={styles.footerlink}>
        <h2 className={styles.footertxt}>Home</h2>
        <h2 className={styles.footertxt}>Attorneys</h2>
        <h2 className={styles.footertxt}>Practice Areas</h2>
        <h2 className={styles.footertxt}>About us</h2>
      </div>

      <div className={styles.footeravg}>
        <img src={instagram}/>
      </div>

      

      </div>
      <div className={styles.footerdiv}>
          <p className={styles.footername}>© 2020 Acme. All rig</p>
          <p className={styles.footername}>Privacy Policy</p>
          <p className={styles.footername}>Terms of Service</p>
       </div>
    </div>
  );
}

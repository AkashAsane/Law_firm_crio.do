import styles from "./poster.module.css";
import React from "react";
import imagbg from "../../assests/imagbg.png";
import back from "../../assests/back.png";
import EmailIcon from "@mui/icons-material/Email";


export default function Bodytext() {
  return (
    <div className={styles.bodywrapper}>
      <div className={styles.content}>
        <h1 className={styles.first}>You don't have to </h1>
        <h1 className={styles.second}>Fight them Alone</h1>
        <p className={styles.info}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>

        <div className={styles.bodybutton}>
          
          <EmailIcon className={styles.email}/>
          <input className={styles.inputtext} placeholder="Enter your email address" type="text"/>
          <button className={styles.bodytalk}>Let's Talk</button>
        </div>
      </div>
      
      
      <img className={styles.bannerimg} src={imagbg} />
    </div>
  );
}

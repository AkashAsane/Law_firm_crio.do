import React from "react";
import businsess from "../../assests/business.png";
import businsess2 from "../../assests/business2.png";
import elder from "../../assests/elder.png";
import land from "../../assests/land.png";
import patnership from "../../assests/partnership.png";
import realestate from "../../assests/realestate.png";
import styles from "./section.module.css";
import gift from "../../assests/gift.png";
export default function Section() {
  return (
    <div className={styles.sectionwrapper}>
      <div className={styles.boxwrapper}>
        <h1 className={styles.box1}>Let's Introduce Ourself</h1>
        <div className={styles.box2}>
          <h3 className={styles.text}>Criminal Lawyer</h3>
          <p className={styles.ptext}>
            {" "}
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>
      <h1 className={styles.cardtitle}>Why Choose Us</h1>
      <div className={styles.card}>
        <div className={styles.cardItem}>
          <img src={gift} alt="gift" className={styles.cardimg} />
          <h2>98% Success Rate</h2>
          <p className={styles.cardItemText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className={styles.cardbtn}>Read more</button>
        </div>
        <div className={styles.cardItem}>
          <img src={gift} alt="gift" className={styles.cardimg} />
          <h2>100% Success Rate</h2>
          <p className={styles.cardItemText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className={styles.cardbtn}>Read more</button>
        </div>
        <div className={styles.cardItem}>
          <img src={gift} alt="gift" className={styles.cardimg} />
          <h2>98% Success Rate</h2>
          <p className={styles.cardItemText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className={styles.cardbtn}>Read more</button>
        </div>
      </div>

      <h1 className={styles.gridtitle}>Area of Practices</h1>

      <div className={styles.grid}>
        <div className={styles.griditem1}>
          <img src={businsess} alt="image" />
          <div className={styles.info1}>BUSINESS LAW</div>
        </div>
        <div className={styles.griditem2}>
          <img src={patnership} alt="image" />
          <div className={styles.info2}>PARTNERSHIP LAW</div>
        </div>
      </div>

      <div className={styles.grid2}>
        <div className={styles.griditem2}>
          <img src={realestate} alt="image" />
          <div className={styles.info2}>REAL ESTATE LAW</div>
        </div>
        <div className={styles.griditem1}>
          <img src={businsess2} alt="image" />
          <div className={styles.info1}>BUSINESS LAW</div>
        </div>
      </div>

      <div className={styles.grid3}>
        <div className={styles.griditem1}>
          <img src={land} alt="image" />
          <div className={styles.info3}>LANDLORD DISPUTES</div>
        </div>
        <div className={styles.griditem2}>
          <img src={elder} alt="image" />
          <div className={styles.info2}>ELDER ABUSE</div>
        </div>
      </div>
    </div>
  );
}

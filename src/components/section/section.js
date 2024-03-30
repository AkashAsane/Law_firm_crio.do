import React from "react";
import { useState } from "react";
import businsess from "../../assests/business.png";
import businsess2 from "../../assests/business2.png";
import elder from "../../assests/elder.png";
import land from "../../assests/land.png";
import patnership from "../../assests/partnership.png";
import realestate from "../../assests/realestate.png";
import styles from "./section.module.css";
import gift from "../../assests/gift.png";
import client1 from "../../assests/client1.png";
import client2 from "../../assests/client2.png";
import client3 from "../../assests/client3.png";
import leftarrow from "../../assests/leftarrow.png";
import rightarrow from "../../assests/rightarrow.png";
import cesfo from "../../assests/cesfo.png";
import daniel from "../../assests/daniel.png";
import hadlone from "../../assests/hadlone.png";
import nik from "../../assests/nik.png";
import sonfole from "../../assests/sonfole.png";
import collen from "../../assests/collen.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import add from "../../assests/add.png";
import Footer from "../Footer/footer";

export default function Section() {
  const [isAccordionExpanded, setIsAccordionExpanded] = useState(false);
  return (
    <div className={styles.sectionwrapper}>
      <div className={styles.boxwrapper}>
        <h1 className={styles.box1}>Let's Introduce Ourself</h1>
        <div className={styles.box2}>
          <h3 className={styles.text}>Criminal Lawyer</h3>
          <p className={styles.ptext}>
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

      <div className={styles.clients}>
        <div className={styles.clientwrapper}>
          <div className={styles.clienthead}>
            <p>What says our happy Clients</p>
          </div>

          <div className={styles.clientnav}>
            <img src={leftarrow} />
            <img src={rightarrow} />
          </div>
        </div>

        <div className={styles.clientscardwrapper}>
          <div className={styles.clientscard1}>
            <img src={client1} />
            <div className={styles.client1body}>
              <h3>Jane Cooper</h3>
              <h5>Ceo of Hunt</h5>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </div>
          </div>

          <div className={styles.clientscard2}>
            <img src={client2} />
            <div className={styles.client1body}>
              <h3>Jane Cooper</h3>
              <h5>Ceo of Hunt</h5>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </div>
          </div>

          <div className={styles.clientscard3}>
            <img src={client3} />
            <div className={styles.client1body}>
              <h3>Jane Cooper</h3>
              <h5>Ceo of Hunt</h5>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className={styles.teamtitle}>Our Team</h1>
      <div className={styles.team}>
        <div className={styles.team1}>
          <img src={daniel} />
          <div className={styles.teaminfo}>
            <h3>Danial Def</h3>
            <h6>301 Cases</h6>
          </div>
        </div>

        <div className={styles.team1}>
          <img src={sonfole} />
          <div className={styles.teaminfo}>
            <h3>Sanfole</h3>
            <h6>850 Cases</h6>
          </div>
        </div>

        <div className={styles.team1}>
          <img src={cesfo} />
          <div className={styles.teaminfo}>
            <h3>Cesforila</h3>
            <h6>470 Cases</h6>
          </div>
        </div>

        <div className={styles.team1}>
          <img src={collen} />
          <div className={styles.teaminfo}>
            <h3>Collen</h3>
            <h6>180 Cases</h6>
          </div>
        </div>

        <div className={styles.team1}>
          <img src={hadlone} />
          <div className={styles.teaminfo}>
            <h3>Haldone</h3>
            <h6>212 Cases</h6>
          </div>
        </div>

        <div className={styles.team1}>
          <img src={nik} />
          <div className={styles.teaminfo}>
            <h3>Nik Jeo</h3>
            <h6>350 Cases</h6>
          </div>
        </div>
      </div>

      <div className={styles.faq}>
        <div className={styles.faqinfo}>
          <h1>FAQ</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint
          </p>
        </div>

        <div className={styles.accordion}>
          <Accordion className={styles.accordion1}>
            <AccordionSummary
              expandIcon={<img src={add} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className={styles.accordion1title}>
                Do I need a personal injury report?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.accordion1info}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className={styles.accordion1}>
            <AccordionSummary
              expandIcon={<img src={add} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className={styles.accordion1title}>
                How much is my case worth?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.accordion1info}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className={styles.accordion1}>
            <AccordionSummary
              expandIcon={<img src={add} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className={styles.accordion1title}>
                What should I do right after car accidect
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.accordion1info}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className={styles.accordion1}>
            <AccordionSummary
              expandIcon={<img src={add} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className={styles.accordion1title}>
                How much is my case worth?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.accordion1info}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className={styles.newswrapper}>

        
               <h1 className={styles.newstitle}>Subscribe Our Newsletter</h1>
        

        <div className={styles.newsinput}>
          <form >
            <input  className={styles.form1} type="text" placeholder="Name:" />
          </form>
          <form >
            <input type="text" className={styles.form2} placeholder="Enter your email" />
          </form>
           <button className={styles.form3}>Send</button>
        </div>
      </div>

           <Footer/>

    </div>
  );
}

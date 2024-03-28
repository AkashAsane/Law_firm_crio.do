import React from "react";
import styles from "./navbar.module.css"
import logo from "../../assests/logo.png"

export default function Navbar()
{
    return(

       <nav className={styles.navbar}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
           
           <div className={styles.link}>
             <h2 className={styles.txt}>Home</h2>
             <h2 className={styles.txt}>Attorneys</h2>
             <h2 className={styles.txt}>Practice Areas</h2>
             <h2 className={styles.txt}>About us</h2>


           </div>

           <div className={styles.button}>
             <h2>Contact Now</h2>
           </div>
          
       </nav> 
    )
}



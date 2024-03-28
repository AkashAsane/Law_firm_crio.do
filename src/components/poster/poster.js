
import styles from "./poster.module.css"
import React from "react"
import image from "../../assests/Image.png"


 export default function Bodytext()
{
    return(

         
           <div className={styles.bodywrapper}>
            <div className={styles.content}>
              <h1 className={styles.first}>You don't have to </h1>
              <h1 className={styles.second}>Fight them Alone</h1>
              <p className={styles.info}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
            </div>
                <img  className={styles.bannerimg} src={image}/>
           </div>

          
          
    )

}






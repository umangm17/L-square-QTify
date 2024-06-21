import React from 'react';
import headphoneLogo from "../../asset/assets/hero_headphones.png";
import styles from "../Hero/Hero.module.css"


function Hero({text1,text2}){
    return (
        <div className={styles.hero}> 
         <span className={styles.herotext}>

            <h1>{text1}</h1>
            <h2>{text2}</h2>
         </span>
         <img className={styles.heroImage}src={headphoneLogo} alt="error" />
        </div>
    )
}

export {Hero}
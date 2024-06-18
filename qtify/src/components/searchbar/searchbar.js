import React from 'react';
import Searchiconlogo from "../../asset/assets/search-icon.svg"
import styles from "./search.module.css"



function SearchBar({search}){


    
    return (
        <div className={styles.searchcss}>
            <input className={styles.search} placeholder={search}></input>
            <button className={styles.iconbutton}>
            <img src={Searchiconlogo}  alt="search icon logo"/>
            </button>
            
        </div>
    )
   

}

export {SearchBar}

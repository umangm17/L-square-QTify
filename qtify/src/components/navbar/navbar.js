import React from 'react';
// import Style from "./navbar.css"
import styles from "./navbar.module.css"
import Logo from "../../asset/assets/logo.png";
import { Button }  from "../button/childButton"
import { SearchBar } from '../../components/searchbar/searchbar';




function Navbar(){
    return (
        
        <div  className={styles.nav}>
            <img src={Logo}  alt="qtifylogo"/>
            <SearchBar search={"Search a song of your choice"} />
            <Button children={"Give Feedback"}/> 
        </div>
        
    )
}

export {Navbar}

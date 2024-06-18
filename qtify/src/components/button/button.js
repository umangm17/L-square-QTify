import React from 'react'
import styles from "./buttonstyle.css";

const Button = ({children}) => {
  return (
    <button className={styles.button} >{children}</button>
  )
}

export {Button}
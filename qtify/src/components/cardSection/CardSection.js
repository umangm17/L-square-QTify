import React from 'react'
import { useState,useEffect } from 'react';
import CardGridSection from "../CardGrid/CardGrid"
import styles from "./CardSection.module.css";
import {CardCarousel} from "../carousel/cardcarousel"
import { Filter } from '../filters/filters';


function CardSection({name,songsData,showFilters}){
    const [isCollapsed, setIsCollapsed] = useState(true);
  const [filteredSongsData, setFilteredSongsData] = useState([]);

  useEffect(() => {
    setFilteredSongsData([...songsData]);
  }, [songsData]);
    return (
        <div className={styles.sectionContainer}>
      <div className={styles.textcontainer}>
        <p>{name}</p>
        <p
          className={styles.collapsebutton}
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          {isCollapsed ? 'Show all' : 'Collapse'}
        </p>
      </div>
      {showFilters ? (
        <Filter
          setFilteredSongsData={setFilteredSongsData}
          songsData={songsData}
        />
      ) : null}
      <div className={styles.cardcontainer}>
        {isCollapsed ? (
          <CardCarousel name={name} songsData={filteredSongsData} />
        ) : (
          <>
            <CardGridSection songsData={filteredSongsData} />
          </>
        )}
      </div>
    </div>
    )
}
export {CardSection}
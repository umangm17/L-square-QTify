import React from 'react'
import { useState,useEffect } from 'react';
import CardGridSection from "../CardGrid/CardGrid"
import styles from "./CardSection.module.css";


function CardSection({name,songsData}){
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
        <Filters
          setFilteredSongsData={setFilteredSongsData}
          songsData={songsData}
        />
      ) : null}
      <div className="card-container">
        {isCollapsed ? (
          <CardCarouselSection name={name} songsData={filteredSongsData} />
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
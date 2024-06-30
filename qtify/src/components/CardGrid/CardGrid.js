import React from 'react';
import {CardComponent} from "../container2/container";
import styles from "./CardGrid.module.css"

const CardGridSection=({songsData})=>{
    return (
        <div className={styles.gridcontainer}>
            {
                songsData.map((song)=>(
                    <CardComponent 
                    key={song.id}
          image={song.image}
          text={
            song.follows !== undefined
              ? `${song.follows} Follows`
              : `${song.likes} Likes`
          }
          title={song.title}
          tooltipText={song.songs?.length}
                    />
                ))
            }
        </div>
    )

}
export default CardGridSection






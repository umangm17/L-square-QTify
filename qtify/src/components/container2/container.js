// topAlbums
// new albums
// songs
import React from "react";
import Card from '@mui/material/Card';
import style from "./container.module.css"
import Tooltip from '@mui/material/Tooltip';
// import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';


function CardComponent( {image, text, title, tooltipText}){
    return (
        <Tooltip
      title={tooltipText ? `${tooltipText} songs` : ``}
      placement="top"
      arrow
    >
        <div className={style.card}>
            <Card className={style.cardBody}>
                <CardMedia className={style.cardImage}
                component="img"
                image={image}
                alt="Paella dish"
                />
                <Chip className={style.cardChip} label={text} />

            
            
            </Card>
            <div className={style.cardtext}>{title}</div>

        </div>
        </Tooltip>
    )
}
export {CardComponent}

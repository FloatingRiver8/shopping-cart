import React from 'react'
import ItemCount from "./ItemCount";
import s from "./item.module.css";


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Item({ id, name, price, images }) {
    return (
    
        <Card key={id} sx={{ maxWidth: 345 }}>
            <CardMedia className = {s.cardImage}
                component="img"
                height="170"
                image= {images}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   Tu planta de interior ${price}
                </Typography>
                <ItemCount stock={8} initial={1}/>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        
       
    );
}

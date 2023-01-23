
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';

const Service = ({image}) => {
    return (
        <Card sx={{
             maxWidth: 345 ,
             boxShadow:'none',
             p:2,
             mx:'auto',
             '&:hover':{
                boxShadow: '0 0 10px 0 rgba(0,0,0,0.4)',
                borderRadius:'1rem',
                backgroundColor:"bisque"
             }
        }}>
      <CardMedia    
      component='img'
        height= '140'
        image={image}
        title="green iguana"
        sx={{ 
            width:'auto',
            mx:'auto'
    }}
      />
      <CardContent sx={{
        textAlign:'center'
      }}>
        <Typography gutterBottom variant="h5" component="div">
          Web & Mobile design
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      
    </Card>
    );
};

export default Service;
import { Box, Grid, styled } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Service from '../../../components/Service/Service';

const Services = () => {

    const serviceImages = [
        'https://i.ibb.co/HNhykGp/iphone-1.png',
        'https://i.ibb.co/r0gHkvM/color-palette-1.png',
        'https://i.ibb.co/CvQwzKC/coding-1.png',
    ]

    const ServiceWrapper = styled(Box)(({theme})=>({

    }))
    return (
        <Box>
            <SectionTitle title="Service Provider" colored="Service"/>
           
            <Grid container spacing={2}>
            {
                serviceImages.map((image,index)=>(
                    <Grid item xs={12} sm={6} md={4} key={index}>
                         <Service key={index} image={image}/>
                    </Grid>
                   
                ))
            }
            </Grid>
        </Box>
    );
};

export default Services;
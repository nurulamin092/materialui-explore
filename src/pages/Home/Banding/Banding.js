import { Box, Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';

const BandingWrapper = styled(Box)(({theme})=>({
    height:'70vh',
            backgroundColor:'rgba(122,178,89,0.15)',
            padding:theme.spacing(4),
            margin:'4rem 0',
            clipPath: 'polygon(0 0, 100% 0%, 100% 85%, 0% 100%)',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center'
}))

const Banding = () => {
    return (
        <BandingWrapper >
            <Stack spacing={5}>
                <Typography sx={{
                    fontSize:'2.5rem',
                    fontWeight:'bold',
                    lineHeight:'1.2'
                }}>
                    Let's Grow Your Brand <br /> To the Next Level
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, repudiandae.
                </Typography>
                <Button sx={{width:'50%'}}>Here Us</Button>
            </Stack>
            <Box sx={{
                width:'50%',
                display:{
                    xs:'none',
                    sm:'none',
                    md:'block',
                    

                }
            }}>
                <img src="https://i.ibb.co/sPXVMbC/Frame.png" alt="banding" style={{width:'100%'}}/>
            </Box>
           
        </BandingWrapper>
    );
};

export default Banding; 
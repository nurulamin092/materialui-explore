import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const OurWork = () => {
    const [value,setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
        <Box sx={{mt:5}}>
            <Box sx={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center'
            }}>
                <SectionTitle 
                title="Here are some of"
                 colored="Our works"
                  sx={{
                    textAlign:'left',
                }}
            />
             <Box>
                <Tabs value={value} onChange={handleChange}  centered>
                    <Tab label="Item One"/>
                    <Tab label="Item Two"/>
                    <Tab label="Item Three"/>
                </Tabs>

            </Box>
            </Box>
           
        </Box>
    );
};

export default OurWork;
import React from 'react';
import Banding from './Banding/Banding';
import Brands from './Brands/Brands';
import OurWork from './OurWork/OurWork';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
           <Banding/>
           <Brands/>
           <Services/>
           <OurWork/>
        </div>
    );
};

export default Home;
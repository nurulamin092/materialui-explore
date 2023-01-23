import React from 'react';
import Banding from './Banding/Banding';
import Brands from './Brands/Brands';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
           <Banding/>
           <Brands/>
           <Services/>
        </div>
    );
};

export default Home;
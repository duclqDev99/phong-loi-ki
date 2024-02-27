import React from 'react';
import Header from '../../UserPage/Header';
import Footer from '../../UserPage/Footer';

// Import các section khác như Banner, Products, etc.
import Billboard from "./Billboard";
import BestSelling from "./BestSelling";

function HomePage() {
    return (
        <div>
            <Header/>
            <Billboard/>
            <BestSelling/>
            <Footer/>
        </div>
    );
}

export default HomePage;

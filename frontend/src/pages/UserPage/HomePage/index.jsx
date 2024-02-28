import React from 'react';

// Import các section khác như Banner, Products, etc.
import Billboard from "./Billboard";
import BestSelling from "./BestSelling";

function HomePage() {
    return (
        <div>
            <Billboard/>
            <BestSelling/>
        </div>
    );
}

export default HomePage;

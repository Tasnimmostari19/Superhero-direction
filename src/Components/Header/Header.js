import React from 'react';
import './Header.css'

const Header = () => {
    const budget = 190000000;
    return (
        <div className='header'>
            <h1>Top Scientist</h1>
            <p>Person who conducts scientific research to advance knowledge in an area of interest.</p>
            <h4>Total Budget:{budget}</h4>
        </div>
    );
};

export default Header;
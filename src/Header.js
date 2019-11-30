import React from 'react';
import logo from './logo.png';

const Header = () => (
    <div className='header'>
        <div className='header-container'>
            <div>
                <img src={logo} alt='logo'></img>
                <h1>guacDev</h1>
            </div>
            <nav>
                <a href='#'>Services</a>
                <a href='#'>Projects</a>
                <a href='#'>Contact</a>
            </nav>
            {/* would like to do a hamburger menu */}
        </div>
    </div>
);

export default Header;
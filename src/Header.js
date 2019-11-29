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
                <a href='#'><i class="fas fa-bars"></i></a>
            </nav>
        </div>
        
    </div>
);

export default Header;
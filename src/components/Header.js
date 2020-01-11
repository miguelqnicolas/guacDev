import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../img/logo.png';

const Header = () => (
    <div className='header'>
        <div className='header-container'>
            <div>
                <img src={logo} alt='logo'></img>
                <h1>guacDev</h1>
                {/* <Link to='/'><h1>guacDev</h1></Link> */}
            </div>
            <nav>
                {/* <Link to='/services'>Services</Link>
                <Link to='/portfolio'>Portfolio</Link> */}
                <a href='mailto:inquiries@guacdev.com'>Contact</a>
                {/* will build out a form later */}
            </nav>
            {/* would like to do a hamburger menu */}
        </div>
    </div>
);

export default Header;
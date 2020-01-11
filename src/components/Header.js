import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';

const HeaderContainer = styled.div`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 1.75rem;
    }

    h1 {
        font-size: 1.25rem;
        font-weight: 500;
        color: whitesmoke;
    }
`

const Header = () => (
    <HeaderContainer>
        <img src={logo} alt='guacdev logo'></img>
        <h1>guacDev</h1>
    </HeaderContainer>
);

export default Header;
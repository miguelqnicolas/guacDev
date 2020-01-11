import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
    height: 90vh;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        margin-bottom: 8px;
        text-align: center;
        font-size: 3rem;
        font-weight: 600;
        color: whitesmoke;
    }

    h3 {
        margin-bottom: 24px;
        text-align: center;
        font-size: 1rem;
        font-weight: 400;
        color: whitesmoke;
    }

    a {
        button {
            padding: 0.5rem 3rem;
            background: whitesmoke;
            border: none;
            border-radius: 3px;
            font-family: 'Quicksand', sans-serif;
            font-size: 0.75rem;
            font-weight: 500;
            color: black;
            outline: none;
            cursor: pointer;
        }
    }
`

const Home = () => {
    return (
        <HomeContainer>
            <h2>Making Websites Look Good</h2>
            <h3>and modern, and mobile-friendly, and lightning-fast, and user-friendly</h3>
            {/* <h3>We build modern, mobile-friendly sites.</h3> */}
            <a href='mailto:inquiries@guacdev.com'><button>Get in Touch</button></a>
        </HomeContainer>
    )    
};

export default Home;
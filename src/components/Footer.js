import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterWrapper>
            <Sub>
                <p>
                    2021 - © Ape Warriors is a collection of 3,000 unique collectible Non-Fungible Tokens.
                </p>
            </Sub>
        </FooterWrapper>
    )
}

export default Footer



const FooterWrapper = styled.div`
    position: fixed;
    width: 660px;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 10px;
    left: 50%;
    right: 50%;
    margin-left: -330px;
    margin-right: -330px;
    @media (max-width: 768px) {
        position: fixed;
        width: 320px;
        left: 0;
        right: 0;
        bottom: 10px;
        
        z-index: 1000;

        color: white;
        background-color: red;
    }

`

const Sub = styled.div`
    font-weight: 200;
    padding: 16px 32px;
    transition: 1s ease-out;
    color: white;
    box-shadow: 0 8px 32px 0 rgba( 24, 29, 39 0.99 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: cetner;
    
    
`
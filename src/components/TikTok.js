import React from 'react'
import styled from 'styled-components'
import '../pages/Home.css'
import {ReactComponent as TikTokIcon} from '../assets/icons/TikTok.svg'

function TikTok() {
    return (
        <TikTokButton>
            <TikTokIcon/>
        </TikTokButton>
    )
}

export default TikTok



const TikTokButton =  styled.button`
    border: 1px solid rgba(255, 255, 250, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    box-shadow: 0 8px 32px 0 rgba( 24, 29, 39 0.2 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.2 );
    border-radius: 15px;
    width: 45px;
    height: 45px;
    color: white;
    cursor: pointer;
    position: absolute;
    top: 105px;
    right: 5vw;
    :hover{
        background-color: rgba(255, 133, 2, 0.3);
        transition: .1s ease-out;

    }
    :active {
        transform: scale(1.1);
        box-shadow: 0 8px 32px 0 rgba(255,255,0,.4);
    }
    img {
        width: 25px;
        height: 25px;
    }
    @media (max-width: 768px) {
        top: 30px;
        left: 10vw;
    }
`

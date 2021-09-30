import React from 'react'
import styled from 'styled-components'

function NFT(props) {
    return (
        <NFTWrapper>
            <img alt="ApeWarriors" src={props.image}/>
            <h1>{props.rank}</h1>
        </NFTWrapper>
    )
}

export default NFT

const NFTWrapper = styled.div`
margin: 0 20px;
background-color: transparent;
box-shadow: 0 8px 32px 0 rgba( 24, 29, 39 0.2 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border: 1px solid rgba( 255, 255, 255, 0.2 );
border-radius: 15px;
height: 360px;
padding: 10px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    img {
        height: 250px;
        width: 250px;
        border-radius: 15px;
        
    }
    h1 {
        margin:auto;
        font-size: 20px;
        font-family: spaceage;
        text-align: center;
    }
`

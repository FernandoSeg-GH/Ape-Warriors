import React from 'react'
import styled from 'styled-components'

function RoadMapItem(props) {
    return (
        <RoadMapItemWrapper>
            <img alt="ApeWarriors" src={props.img}/>
            <RoadMapItemContent>
                <h1>{props.chapter}</h1>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </RoadMapItemContent>
        </RoadMapItemWrapper>
    )
}

export default RoadMapItem


const RoadMapItemWrapper = styled.div`
    width: 680px;
    height: 340px;
    display: flex; 
    justify-content: start;
    align-items:center;
    margin-right: 20px;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: transparent;
    box-shadow: 0 8px 32px 0 rgba( 24, 29, 39 0.2 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.2 );
    img {
        width: 260px;
        height: 260px;
        box-shadow: 0 8px 32px 0 rgba( 24, 29, 39 0.2 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border: 1px solid rgba( 255, 255, 255, 0.2 );
    }
    @media (max-width: 768px) {
        width: 250px;
        height: auto;
        flex-direction: column;
        justify-content: start;
        padding: 0;
        margin: 0 10px;
        padding-top: 15px;
        img {
            width: 200px;
            height: 200px;
            background-color: transparent;
            box-shadow: 0 8px 32px 0 rgba( 24, 29, 39 0.2 );
            backdrop-filter: blur( 4px );
            -webkit-backdrop-filter: blur( 4px );
        }
    }
    
`

const RoadMapItemContent = styled.div`
    width: 460px;
    height: 300px;
    display: flex; 
    flex-direction: column;
    justify-content: start;
    align-items:start;
    margin: 0 10px;
    padding-top: 20px;
    text-align: left;
    margin-left: 20px;
    font-family: roboto;
    font-weight: 300;
    
    p{
        margin-top: 20px;
        font-size: 24px;
        
    }
    h1{
        font-family: spaceage
    }
    h2{
        margin-top: 10px;
    }
    @media (max-width: 768px) {
        width: 75vw;
        padding: 0;
        margin:0;
        height: 200px;
        align-items: center;
        text-align: center;
        p{
            margin-top: 20px;
            font-size: 15px;
            width: 220px;
        }
        h1{
            font-family: spaceage;
            font-size: 20px;
            margin-top: 20px;
        }
        h2{
            margin-top: 10px;
            font-size: 18px;
        }
    }


`
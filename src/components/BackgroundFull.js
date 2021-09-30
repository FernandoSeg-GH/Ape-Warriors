import React from 'react'
import styled from 'styled-components'

function BackgroundFull(props) {
    return (
        <Relative>
        <BackgroundFullWrapper>
            <BGFullImage className="image" alt={props.alt} src={props.url}/>
            <Overlay/>
        </BackgroundFullWrapper>

        </Relative>
    )
}

export default BackgroundFull

const Relative = styled.div`
    height: 1px;
    width: 1px;
    position: relative;
    top: 0;
    left: 0;
`


const BackgroundFullWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
     @media (max-width: 768px) {
        height: 100%;
        img{
            height: 100%;
        }
        
    }
`

const BGFullImage = styled.img`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: 1;
    @media (max-width: 768px) {
        object-fit: cover;
        
    }
    
`

const Overlay = styled.div`
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0, 0.5);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(34,31,31,0) 100%, rgba(255,255,255,1) 60%);
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;

`
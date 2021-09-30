import React from 'react'
import styled from 'styled-components'

function ButtonRnd(props) {
    return (
        <div>
            <ButtonRndWrapper>{props.btnContent}</ButtonRndWrapper>
        </div>
    )
}

export default ButtonRnd



const ButtonRndWrapper = styled.button`
    background-color: transparent;
    
    box-shadow: 0 18px 32px 0 rgba( 250, 253, 15 0.9 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    
    border: 1px solid rgba( 255, 255, 255, 0.2 );
    
    width: 80px;
    height: 80px;
    border-radius: 100%;
    margin: 0;
    padding: 0;
    color: white;
    font-size: 22px;
    
    cursor: pointer;
    margin: 60px 0;
    :hover {
        transition: 1s ease-out;
        background-color: #D8C303;
        color: #181d27;
        font-size: 24px;
    }
`

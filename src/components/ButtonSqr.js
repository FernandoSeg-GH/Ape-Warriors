import React from 'react'
import styled from 'styled-components'

function ButtonSqr(props) {
    return (
        <div>
            <Validate>{props.btnContent}</Validate>
        </div>
    )
}

export default ButtonSqr

const Validate = styled.button`
    background-color: transparent;
    font-familyt: roboto-thin;
    box-shadow: 0 8px 32px 0 rgba( 24, 29, 39 0.2 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    
    border: 1px solid rgba( 255, 255, 255, 0.2 );
    border-radius: 15px;
    width: 240px;
    height: 60px;
    margin: 0;
    padding: 0;
    color: white;
    font-size: 26px;
    
    cursor: pointer;
    margin: 60px 0;
    :hover {
        transition: 1s ease-out;
        background-color: #D8C303;
        color: #181d27;
        font-size: 24px;
    }
`
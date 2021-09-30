import React from 'react'
import styled from 'styled-components'

function Overlay() {
    return (
        <div>
            <OverlayWrapper/>
        </div>
    )
}

export default Overlay




const OverlayWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    box-shadow: 0 8px 0 0 #6f1f3a;
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    background-color: rgba(37, 36, 64, 0.1);
    position: absolute;
    top: 0;
`

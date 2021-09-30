import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import styled from 'styled-components'
import Footer from './Footer';

function NavLone() {
   
    return (
        <>
        <NavLoneWrapper>
            <NavbarWrapper>
            <h1 style={{visibility:"hidden", position:"absolute", zIndex:"-10"}}>Ape Warriors NFT - Unique Collectibles</h1>
            <div>
                <Link to="/home">
                    <img style={{width:"280px"}} src="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632416149/apewarriors/Sin_ti%CC%81tulo-2_knoooq.png" alt=""/>
                </Link>
                    
            </div>
        
            
            </NavbarWrapper>
           

        </NavLoneWrapper>
        <Footer/>
        </>
    )
}

export default NavLone

const NavLoneWrapper = styled.nav`
    width: 100vw; 
    height: 100px;
    box-shadow: 0 8px 32px 0 #6f1f3a;
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    position: relative;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    background-color: transparent;
    color: white;
    padding: 0 5vw;
    position: fixed;
    z-index: 100;
    top: 0;
    left:0;
    display: flex;
    align-items: center;
`

const NavbarWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

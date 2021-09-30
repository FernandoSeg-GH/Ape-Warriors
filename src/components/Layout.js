import React,{useState} from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import styled from 'styled-components'
import Footer from './Footer';
import {ReactComponent as Open} from '../assets/icons/menu.svg'
import {ReactComponent as CloseIcon} from '../assets/icons/cancel.svg'
import Overlay from './Overlay';
// import Play from './Play';
// import Telegram from './Telegram';
// import Twitter from './Twitter';
// import TikTok from './TikTok';


function Layout() {
    const [menuStatus, setMenuStatus] = useState(false)



    return (
        <>
        <LayoutWrapper>
            <NavbarWrapper>
                <h1 style={{visibility:"hidden", position:"absolute", zIndex:"-10"}}>Ape Warriors NFT - Unique Collectibles</h1>
                <Logo>
                    <Link to="/home">
                        <img style={{width:"280px"}} src="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632416149/apewarriors/Sin_ti%CC%81tulo-2_knoooq.png" alt=""/>
                    </Link>
                        
                </Logo>
                <NavBtns>
             
                    <ButtonOpen style={{marginLeft:"20px"}} onClick={()=>setMenuStatus(true)}>
                        <Open/>
                    </ButtonOpen>
                </NavBtns>
            </NavbarWrapper>
            <Menu status={menuStatus}>
                <MenuWrapper>
                    <Overlay/>

                    <ButtonClose onClick={()=>setMenuStatus(false)}>
                        <CloseIcon/>
                    </ButtonClose>
                    {/* <Telegram/>
                    <Twitter/>
                    <TikTok/> */}
                    
                    <MenuCardWrapper>
                        <MenuCard onClick={()=>setMenuStatus(false)}>
                            <Link smooth to="#main">
                                <img src="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632515447/apewarriors/gif_adgbk7.gif" alt="" />
                            </Link>
                                <h1>About</h1>
                        </MenuCard>
                        <MenuCard onClick={()=>setMenuStatus(false)}>
                            <Link smooth to="#mint">
                                <img src="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632515028/apewarriors/mint_d7fvol.gif" alt="" />
                            </Link>
                                <h1>Mint</h1>
                        </MenuCard>
                        <MenuCard onClick={()=>setMenuStatus(false)}>
                            <Link smooth to="/">
                                <img src="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632455441/apewarriors/tumblr_o4g6q2YJG41rldv4go1_540_vvjjhh.gif" alt="" />
                            </Link>
                                <h1>Story</h1>
                        </MenuCard>
                        <MenuCard onClick={()=>setMenuStatus(false)}>
                            <Link smooth to="#roadmap">
                                <img src="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632439991/apewarriors/AridInferiorGnat-size_restricted_hfb50m.gif" alt="" />
                            </Link>
                                <h1>Roadmap</h1>
                        </MenuCard>
                        <MenuCard onClick={()=>setMenuStatus(false)}>
                            <Link smooth to="#roadmap">
                                <img src="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632458317/apewarriors/034679e63fe2f87efda77eb760227238_q7hxqx.gif" alt="" />
                            </Link>
                                <h1>Academy</h1>
                        </MenuCard>  
                    </MenuCardWrapper>
                </MenuWrapper>
            </Menu>

        </LayoutWrapper>
        <Footer/>
        </>
    )
}

export default Layout

const LayoutWrapper = styled.nav`
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
     @media (max-width 768px){
        display: flex;
        justify-content: end;
        height: 50px;
        
    }
`

const NavbarWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width 768px){
        
        
    }
`

const Logo = styled.div`
    visibility: visible;
    @media (max-width: 768px) {
        display: none;
    }
`

const NavBtns = styled.div`
    display: flex;
    @media (max-width: 768px) {
        position: absolute;
        top: 30px;
        right: 10px;
    }
    
`

const ButtonOpen =  styled.button`
    border: 1px solid rgba(255, 255, 250, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
     background-color: transparent;
    box-shadow: 0 8px 32px 0 rgba( 24, 29, 39 0.2 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.2 );
    width: 45px;
    height: 45px;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    background-color: rgba(23,23,39,0.9);
    svg {
        width: 45px;
        height: 45px;
        
    }
    :hover{
        background-color: rgba(255, 133, 2, 0.3);
        transition: .1s ease-out;

    }
    :active {
        transform: scale(1.1);
        box-shadow: 0 8px 32px 0 rgba(255,255,0,.4);
    }
`


const ButtonClose =  styled.button`
    border: 1px solid rgba(255, 255, 250, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
     background-color: transparent;
    box-shadow: 0 8px 32px 0 rgba( 24, 29, 39 0.2 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.2 );
    width: 45px;
    height: 45px;
    color: white;
    cursor: pointer;
    position: absolute;
    top: 25px;
    right: 5vw;
    border-radius: 5px;
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
`


const Menu = styled.div`
    position: fixed;
    width: 100vw;

    top: 0;
    right: 0;
    bottom: 0;
    list-style: none;
    transform: ${props => props.status ? 'translateY(0)' : 'translate(100vw)'};
    transition: transform 0.4s ease-in;
    @media (max-width: 768px) {
        
    }
`


const MenuWrapper = styled.div`
    position: relative;
    background-image: url('https://res.cloudinary.com/devops-imgcloud/image/upload/v1632275262/apewarriors/Orbit_17_r237fk.png');
    background-color: rgba(24, 29, 39,0.71);
    background-size: cover;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    
    @media (max-width: 768px) {
        text-align: center;
        background-color: rgba(37, 36, 64, 1);
        background-image: none;
        display: flex;
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
`

const MenuCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
        overflow: hidden;
        overflow-x: scroll;
        width: 100vw;
        margin-top: 40px;
    }
`


const MenuCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0 10px;
    width: 300px;
    height: 55vh;
    position: relative;
    background-color: transparent;
    box-shadow: 0 8px 32px 0 rgba( 24, 29, 39 0.2 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.2 );
   
    cursor: default;
    text-decoration: none;
    h1 {
        cursor: default;
        font-size: 28px;
        text-align: center;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.81);
        font-family: spaceage;

    }
    img {
        width: 220px;
        height: 320px;
        transition: all 1s ease-out;
        transform-origin: center center;
        filter: brightness(70%);
        object-fit: cover;
        border-radius: 50px;
        box-shadow: 0 8px 32px 0 black;
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        position: relative;
        border: none;
    }
    :hover{
        img {
        
        height: 380px;
        filter: brightness(1.2);
    }
        

        transition: 1s ease-out;
    
    }
    @media (max-width: 1023px) {
        margin-left:15px;
        height: 400px;
        padding: 0 20px;
    }

`


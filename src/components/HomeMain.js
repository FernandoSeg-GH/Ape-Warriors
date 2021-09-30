import React from 'react'
import Stars from './Stars'
import styled from 'styled-components'
import NFT from './NFT'

function HomeMain() {
    return (
        <HomeMainWrapper id="main">
            
            <MintMain>
                <HomeMainContent>
                        <h1 style={{fontFamily:"spaceage", marginBottom:"20px"}}>Welcome to the Space Ape Warriors <br/>Command Station.</h1>
                        <p>Every Ape Warrior is one of a kind. We lost a battle but not the war.</p>
                        <p>Only <span style={{fontFamily:"roboto-bold"}}>3,000</span> units survived and are now in sleep recovery mode.</p>
                        <p>It is your duty to activate a unit by minting it.</p>
                  
                        <div className="wrapper">
                            <div className="typing-demo0101" style={{ marginTop:"30px"}}>
                                <p  style={{fontFamily:"spaceage"}}>Our Warriors Await for your orders...</p>
                            </div>
                        </div>
              
                    <NFTs>
                        <NFT rank="General" image="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632615773/apewarriors/78_oozevh.png"/>
                        <NFT rank="Lieutenant General" image="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632496237/apewarriors/1129_vfewlz.png"/>
                        <NFT rank="Major General" image="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632496157/apewarriors/2845_oeweyx.png"/>
                        
                        <NFT rank="Colonel" image="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632496129/apewarriors/2894_tou7yf.png"/>
                        <NFT rank="Lieutenant Colonel" image="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632496109/apewarriors/2929_ny2zoz.png"/>
                        <NFT rank="Major" image="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632496120/apewarriors/2909_xippt7.png"/>
                        <NFT rank="Captain" image="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632496120/apewarriors/2909_xippt7.png"/>
                        <NFT rank="First Lieutenant" image="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632496203/apewarriors/1600_fy23xm.png"/>
                        <NFT rank="Second Lieutenant" image="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632496085/apewarriors/2988_sf6jfu.png"/>
                        <NFT rank="Command Chief Master Sergeant" image="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632496219/apewarriors/1168_t2u92h.png"/>
                        <NFT rank="Space Ape" image="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632496089/apewarriors/2986_vbrd1h.png"/>
                    </NFTs>
                </HomeMainContent>
            </MintMain>
            <Stars/>
        </HomeMainWrapper>
    )
}

export default HomeMain


const HomeMainWrapper = styled.div`
    scroll-snap-align: start;
    font-size: 28px;
    height: 100vh;
    width: 100vw;
    padding: 0 20vw;
    padding-top: 140px;
    display:  flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    background-image: url("https://res.cloudinary.com/devops-imgcloud/image/upload/v1632536159/apewarriors/Orbit_111_ipzfec.png");
    background-size: cover;
    @media (max-width: 768px) {
        height:  960px;
        scroll-snap-align: none;
        width: 100vw;
        padding:0 ;
        margin: 0;
        padding-top: 140px;
        
    }
`



const MintMain = styled.div`
    text-align: center;
    font-size: 24px;
    width: 60vw;
    height: 76vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     box-shadow: 0 8px 32px 0 black;
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    padding: 40px;
    z-index: 10;
    
    p {
      font-family: roboto-thin;
      
    }
    @media (max-width: 768px) {
        height: 100%;
        width: 90vw;
        padding:0;
        margin:0;
        margin-left: 5vw;
        
        p {
            font-family: roboto-thin;
        }
    }
    
`

const HomeMainContent = styled.div`
 overflow: hidden;
 width: 60vw;
 @media (max-width: 768px) {
    
    padding: 20px 10px;
    width: 90vw;
    height: 100%;
    p{
        font-size: 16px;
    }
 }
 
`
const NFTs = styled.div`
width: 80vw;
overflow-x: scroll;


    padding-top: 40px;
    font-size: 28px;
    height: 100vh;

    display:  flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    @media (max-width: 768px) {
        height: 100%;
        
        width: 100vw;
    }
    
`
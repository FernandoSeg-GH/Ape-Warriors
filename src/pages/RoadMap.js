import React from  'react';
import styled from "styled-components";
import RoadMapItem from '../components/RoadMapItem';

function RoadMap() {
  return (
      <MintWrapper id="roadmap">
        
        <Wrapper>
            <MintMain>
                <Counter style={{fontFamily:"spaceage", marginTop:"20px"}}>
                    
                    <h1>A promising roadmap lies upon us.</h1>
                    
                    <p style={{fontFamily:"spaceage", marginBottom:"20px"}}>Once all <span style={{color:"rgba(255,255,43,0.5)"}}>3,000</span> Ape Warriors are activated<br/>The Space Ape Army will be launched.</p>
                    <p>The Ape Warriors NFT Project is a long term journey.</p>
                    <p>Our Roadmap consist of various chapters, each with a specific goal.</p>
                </Counter>
            </MintMain>  
            <NFTs>
              <List>
                  <RoadMapItem 
                      img="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632516647/apewarriors/giphy_ngm4r0.webp" 
                      chapter="Chapter 01" 
                      title="Ape Warriors Activation"
                      content={`Minting 3,000 NFT Ape Warriors with unique DNA, some with exclusive rare traits. Your Ape Warrior is just the start of the Space Ape Army mission in the metaverse.`}/>
                  <RoadMapItem
                      
                      img="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632511302/apewarriors/giphy_fqf1cv.gif" 
                      chapter="Chapter 02" 
                      title="10,000 Allies and Space Radation"
                      content={`Word got out to other space rules. They are heading our way to help us against this dark and obscure enemy. Gather as much Space Radiation Token* to prepare weapons.`}/>
                  <RoadMapItem
                      
                      img="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632512207/apewarriors/enemy_jfc8qf.gif" 
                      chapter="Chapter 03" 
                      title="The Enemy Strike!"
                      content="10,000 dark foes heading towards us. Lucky enough, our intelligence brigade found a weakness in their lines. You must start farming Space Radiation to build our defense system."/>
              
              </List>
              <List>
                  <RoadMapItem 
                      img="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632458321/apewarriors/japan-aesthetic_qh8s7o.gif" 
                      chapter="Chapter 04" 
                      title="Launch Ape Warriors DAPP Metaverse Kit"
                      content="100% decentralized and functional Blockchain assets. Players can mint new assets, and participate in the Space Battlefield trading arena."/>
                  <RoadMapItem 
                      img="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632439991/apewarriors/AridInferiorGnat-size_restricted_hfb50m.gif" 
                      chapter="Chapter 05" 
                      title="Metaverse Integration" 
                      content="Our battle is not only here, but acccross several chains. We'll open integrations to 3rd party projects to broaden up our universe."/>
                  <RoadMapItem 
                      img="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632458317/apewarriors/034679e63fe2f87efda77eb760227238_q7hxqx.gif" 
                      chapter="Chapter 06" 
                      title="Academy"
                      content="An educational platform to introduce blockchain through the use of Space Warriors DAPP."/>
              </List>
            </NFTs>
        </Wrapper>
        </MintWrapper>
        
  );
}

export default RoadMap;



export const MintWrapper = styled.div`

    scroll-snap-align: start;
    background-image: url("https://res.cloudinary.com/devops-imgcloud/image/upload/v1632523975/apewarriors/4b7860913fda724a3743d3948c5ea10a-1000_opceo6.jpg");
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
        height: 1200px;
        scroll-snap-align: none;
    }
  
`
export const Start = styled.div`
    position: absolute;
    top: 0; 
    left: 0;
    z-index: -01;
    
`

export const MintContent = styled.div`
    background-color: transparent;
    box-shadow: 0 8px 32px 0 rgba( 24, 29, 39 0.2 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.2 );
    border-radius: 15px;
    width: 1010px;
    text-align: center;
    padding-top: 20px;
    font-family: roboto-thin;
    font-size: 28px;
`

export const ResponsiveWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: stretched;
    align-items: stretched;
    width: 100%;

    @media (max-width: 768px) {
    flex-direction: column;
    }
`;

export const StyledImg = styled.img`
    width: 200px;
    height: 200px;
    @media (max-width: 768px) {
      width: 300px;
      height: 300px;
    }
    transition: width 0.5s;
    transition: height 0.5s;
`;


const MintMain = styled.div`
    
    text-align: center;
    font-size: 24px;
    
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
    p {
      font-family: roboto-thin;
      
    }

    @media (max-width: 768px) {
        height: auto;
        width: 90vw;
    }
    
`

const Wrapper = styled.div`
    background-color:transparent;
    width: 80vw;
    padding: 40px 60px;
    height: 75vh;
    margin-top:60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     box-shadow: 0 8px 32px 0 black;
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    @media (max-width: 768px) {
        height: auto;
        margin: 60px 0;
        width: 90vw;
    }
    
`


const Counter = styled.div`
    padding: 5px;
    h1{
        margin-bottom: 12px;
        font-size: 34px;
    }
   @media (max-width: 768px) {
        h1{
            margin-bottom: 30px;
            font-size: 34px;
        }
    }
`

const List = styled.div`
    display: flex;
    width: auto;
    margin-top: 20px;
`

const NFTs = styled.div`
    width: 80vw;
    overflow-x: scroll;
    font-size: 28px;
    height: 100vh;
    padding-left: 20px;
    display:  flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    @media (max-width: 768px) {
        height: auto;
    }
`
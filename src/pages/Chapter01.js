import React from 'react'
import './Home.css'
import styled from 'styled-components';
import { Link } from "react-router-dom";
// import withTransition from '../HOC/withTransition';
import { motion } from 'framer-motion';
import './Home.css'
import {ReactComponent as SkipSvg} from '../assets/icons/skip.svg'
import NavLone from '../components/NavLone';

function Chapter01() {
    return (
        <Chapter01MainWrapper>
            <NavLone/>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2}}>
            
                <Chapter01Wrapper id="target">
                
                    <Chapter01Content>
                        <img src="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632615773/apewarriors/78_oozevh.png" alt=""/>
                        <br/><br/>
                        <br/><br/>
                        A great war broke out in space when a civilization called Humans opened an interestelar gate, bringing chaos to the balance of the universe. 
                        <br/><br/> 
                        The battle was easy, we aniquilated the threat, unfortunately these Earthly Humans were not the only visitors coming through the gatet... 
    
                        <br/><br/> 
                        An oscure force crawled through the same black hole, which we did not see comming. 
                        <br/><br/> 
                        Though we were able to contain and eliminate the threat, and we suffered heavy losses. 
                        <br/><br/> 
                        Our intelligence corps sent us new intel, and it looks like this dark force is sending more offensive brigade, our planet is in danger. 
                        <br/><br/> 
                        It is now your duty to mint a warrior, and reassemble the army, gather new troops and resource and prepare for space war! 
                    </Chapter01Content>
                </Chapter01Wrapper>

                <section style={{height:"100vh"}}>
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                </section>

            
                <Link to="/Home">
                    <Validate>
                         <p>Continue</p>
                    <SkipSvg/>
                    </Validate>
                </Link>
        
            
            </motion.div>
        </Chapter01MainWrapper>
    )
}

export default Chapter01



const Chapter01MainWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-image: url("https://res.cloudinary.com/devops-imgcloud/image/upload/v1632536159/apewarriors/Orbit_111_ipzfec.png");
    background-size: cover;

`

const Chapter01Wrapper = styled.div`
    background-color: transparent;
    box-shadow: 0 8px 32px 0 rgba( 24, 29, 39 0.2 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.2 );
    position:absolute;
    top:0;

    padding: 0 80px;
    bottom:0;
    left:0;
    right:0;
    transform-origin:50% 100%;
    transform:perspective(235px) rotateX(12deg);
    :after{
        content:'';
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        pointer-events:none;
    }
    @media (max-width: 768px) {
        transform-origin:50% 100%;
        transform:perspective(205px) rotateX(12deg);
        padding: 0 20px;
        padding-top: 100px;
        z-index:10;
        
        font-size: 28px;

        img{
            width: 200px;
        }
    }
`


const Chapter01Content = styled.div`
    color: white;
    font-size: 80px;
    font-family: roboto;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`

const Validate = styled.button`
    background-color: transparent;
    box-shadow: 0 8px 32px 0 rgba( 24, 29, 39 0.2 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border: 1px solid rgba( 255, 255, 255, 0.2 );
    
    width: 200px;
    height: 60px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    margin: 0;
    
    color: white;
    
    font-size: 22px;
    
    cursor: pointer;
    position: absolute;
    top: 2.5vh;
    right: 5vw;
    display: flex;
    z-index: 100;
    justify-content: space-around;
    align-items:center;
    :hover {
        transition: 1s ease-out;
        background-color: #D8C303;
        color: #181d27;
        font-size: 24px;
    }
    svg{
        padding-top: 8px;
        width: 60px;
        height: 60px; 
        
    }
    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
        border-radius: 150%;
        top: 20vh;
        p {
            display:none
        }
    }
`

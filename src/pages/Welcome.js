import React from 'react'
import styled from 'styled-components'
import './Home.css'
import { Link } from "react-router-dom";
import ButtonSqr from '../components/ButtonSqr';
import ButtonRnd from '../components/ButtonRnd';
import { motion } from 'framer-motion';
// import withTransition from "../HOC/withTransition";


const initial = {
    opacity: 1,
    backgroundColor: "#6f1f3a",
    x: 0
}

const animate={
    opacity: 1,
    transition: { duration: 1},
}

const exit  = {
    opacity: 0,
    transition: { duration: 1},
}

function Welcome() {
    return (
        <motion.div initial={initial} animate={animate} exit={exit} >
            <WelcomeWrapper id="welcome">
                <Align>
                <WelcomeMain>
                    <General>    
                    <img alt="" src="https://res.cloudinary.com/devops-imgcloud/image/upload/v1632615773/apewarriors/78_oozevh.png"/>
                </General>
                    <div className="wrapper">
                        <div className="typing-demo">
                        <span>Welcome</span> Ape Warrior...
                        </div>
                    </div>
                </WelcomeMain>
                <ButtonsWrapper>
                    <Link to="/Chapter01">
                        <ButtonSqr btnContent="Initiate"/>
                    </Link>
                    <Link to="/Home">
                        <ButtonRnd btnContent="Skip"/>
                    </Link>
                </ButtonsWrapper>
                </Align>
                <section style={{height:"100vh"}}>
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                </section>

            </WelcomeWrapper>
        </motion.div>
    )
}

export default Welcome


const WelcomeWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url("https://res.cloudinary.com/devops-imgcloud/image/upload/v1632275261/apewarriors/Orbit_55_olfhrh.jpg");
    background-size: cover;
    // background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 35vh;
    padding-bottom: 5vh;
    color: white;
    overflowY: hidden;
    position: fixed;
    @media (max-width: 768px) {
        
        span{
            display: none;
        }
    }
`



const Align = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    jutsify-content: center;
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
        
    }
`

const WelcomeMain = styled.div`
    font-size: 28px;
    @media (max-width: 768px) {
        
        font-size: 16px;
        width: 300px;
    }
`

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 520px;
    justify-content: center;
    align-items: center
`


const General = styled.div`

    position: relative;

    position: absolute;
    z-index: 1011111;
    left: 50%;
    margin-left: -125px;
    right: 50%;
    margin-right: -125px;
    top: 40px;


    img {
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border: none;
        border-radius: 50px;
        background-color: rgba(111, 31, 58, .71);   
        margin: auto;    
        width: 250px;
        height: 250px;
        border-radius: 100%;
}
    @media (max-width: 768px) {
           position: relative;

    position: absolute;
    z-index: 1011111;
    left: 50%;
    margin-left: -75px;
    right: 50%;
    margin-right: -75px;
    top: 40px;
        img {
            width: 150px;
         height: 150px;
        }
  }
`
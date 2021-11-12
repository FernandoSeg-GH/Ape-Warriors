import React from 'react'
import styled from 'styled-components'
import './Home.css'
// import { Link } from "react-router-dom";
import withTransition from '../HOC/withTransition';
import WarriorActivation from './WarriorActivation';
import RoadMap from './RoadMap';
import HomeMain from '../components/HomeMain';
import Layout from '../components/Layout';

function Home() {
    return (
        <HomeWrapper>
            <Layout/>
                <Snap >
                    <HomeMain id="start"/>
                </Snap>
                <Snap >
                    <WarriorActivation id="mint"/>
                </Snap>
                <Snap >
                    <RoadMap id="roadmap"/>
                </Snap>
            
        </HomeWrapper>
    )
}

export default withTransition(Home)


const HomeWrapper = styled.div`
    height: 100%;
    width: 100vw;
    background-color: rgba(24, 29, 39, 0.99);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    @media (max-width: 768px) {
        height: auto;
    }    
`
    
    const Snap = styled.div`
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
        height: auto;
        scroll-snap-align: none;
    }    
`   
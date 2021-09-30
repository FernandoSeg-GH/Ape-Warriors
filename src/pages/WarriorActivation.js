import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import * as s from "../styles/globalStyles";
import styled from "styled-components";


function WarriorActivation() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("Will your Ape Warrior be on the top tier?");
  const [claimingNft, setClaimingNft] = useState(false);

  const claimNFTs = (_amount) => {
    if (_amount <= 0) {
      return;
    }
    setFeedback("Preparing to activate your Ape Warrior NFT...");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, _amount)
      .send({
        gasLimit: "285000",
        to: "0x6f6a0BE20E9Ca2c492E2242B2B0Df40E9EAE83F7",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((10 * _amount).toString(), "MATIC"),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("It seems the transaction was cancelled.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "Protocol-721 Activated! Your Ape Warrior is activated and yours only. Visit OpenSea.io to view your NFT!"
          );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
      <MintWrapper id="mint">
       

        <MintMain>

          <Counter style={{fontFamily:"spaceage", marginTop:"20px"}}>
            <CountTitle className="wrapper02">
              <p style={{fontFamily:"spaceage", marginBottom:"20px"}}>Welcome to the Minting Station.<br/>Please Connect to the MATIC chain (ex-Polygon)</p>
            </CountTitle>
            
            <p>Each Ape Warrior is one of a kind with unique DNA traits*.</p>
            <p style={{margin:"6px 0"}}>Only <span style={{fontFamily:"roboto-thin", color:"rgba(255,255,43,0.9)"}}>3,000</span> units survived and are now in sleep recovery mode.</p>
            <p>It is your duty to activate a unit by minting it.</p>
          </Counter>
        


          <Wallet>
          
            {Number(data.totalSupply) === 3000 ?  (
              <Presale>
                <div>
                  The sale has ended.
                </div>
                <div>
                  You can still buy and trade Ape Warriors NFTs on{" "}
                  <a
                    style={{color:"white"}}
                    target={""}
                    href={"https://opensea.io/collection/apewarriors-v2"}
                  >
                    Opensea.io
                  </a>
                </div>
              </Presale>
            ) : (
              <Presale>
                
                <PresaleSub>
                  <h1 style={{marginBottom:"18px"}}>
                    There are {data.totalSupply}/3000 Ape Warriors left to activate
                  </h1>
                  <p>Minting Cost: 10 MATIC</p>
                  <p style={{margin:"6px 0", marginBottom:"20px"}}>Activating 1 Space Warrior is a complex brew.</p>
                  <p>{feedback}</p>
                </PresaleSub>
                <s.SpacerXSmall />
                <div>
                </div>
                
                  
                
              
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <WalletSlot>
                    <Validate
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}>
                      CONNECT WALLET
                    </Validate>
                    <p style={{fontFamily:"roboto", fontWeight:"200", fontSize:"16px", color:"rgba(255,255,255,0.6)", fontStyle:"italic"}}>
                      Gas Fee not included.
                    </p>
                    {blockchain.errorMsg !== "" ? (
                      <>
                       
                        <div>
                          {blockchain.errorMsg}
                        </div>
                      </>
                    ) : null}
                  </WalletSlot>
                ) : (
                  <div>
                    <Validate
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs(1);
                        getData();
                      }}
                    >
                      {claimingNft ? "Activating your Warrior..." : "Buy 1 Ape Warrior NFT"}
                    </Validate>
                  </div>
                )}
              </Presale>
              
            ) }
          </Wallet>
        </MintMain>  
      </MintWrapper>
        
  );
}

export default WarriorActivation;



export const MintWrapper = styled.div`
    scroll-snap-align: start;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    background-image: url("https://res.cloudinary.com/devops-imgcloud/image/upload/v1632275261/apewarriors/Orbit_56_fogznn.jpg");
    background-size: cover;
    @media (max-width: 768px) {
        height: 1100px;
        scroll-snap-align: none;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 80px 0;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      width: 90vw;
      
    }
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

const Validate = styled.button`
    background-color: transparent;
    
    box-shadow: 0 8px 32px 0 rgba( 24, 29, 39 0.2 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    
    border: 1px solid rgba( 255, 255, 255, 0.2 );
    border-radius: 5px;
    width: 500px;
    height: 60px;
    margin: 0;
    padding: 0;
    color: white;
    font-size: 26px;
    font-family: spaceage;
    cursor: pointer;
    margin: 60px 0;
    :hover {
        transition: 1s ease-out;
        background-color: rgba(255, 133, 2, 0.3);
        color: white;
        font-size: 24px;
        
    }
    @media (max-width: 768px) {
        width: 250px;
        font-size: 18px;
    }
`

const MintMain = styled.div`
    
    text-align: center;
    font-size: 24px;
    width: auto;
    padding: 40px 60px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     box-shadow: 0 8px 32px 0 black;
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    p {
      font-family: roboto-thin;
    }
    
    @media (max-width: 768px) {
        scroll-snap-align: none;
        width: 90vw;
        padding:0;
        margin: 0;
        padding-top: 40px
        
        
    }
    
`
const WalletSlot = styled.div`

  @media (max-width: 768px) {
      width: 300px;
      height: auto;display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0;
      width: 100%;
       
  }
`


const CountTitle = styled.div`
    width: 100%;
    height: auto;
`

const Counter = styled.div`
    padding: 5px;
    @media (max-width: 768px) {
      width: 90vw;
      padding:0 20px;
      font-size: 18px;
      
    }

`

const Wallet = styled.div`
    width: 1010px;
    @media (max-width: 768px) {
      width: 90vw;
      display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
      
`

const Presale = styled.div`
    font-family: roboto-thin;
    padding-top: 30px;
    @media (max-width: 768px) {
      font-family: roboto-thin;
      width: 300px;
      
    }
`
const PresaleSub = styled.div`
    @media (max-width: 768px) {
      font-family: roboto-thin;
      
    }
  
`
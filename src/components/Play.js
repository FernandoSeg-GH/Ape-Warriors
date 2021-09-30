// import React, { useState } from 'react'
// import Sound from 'react-sound'
// import ApeWarriors from '../assets/song/ApeWarriors.mp3'
// import styled from 'styled-components'
// import '../pages/Home.css'
// import {ReactComponent as PlaySong} from '../assets/icons/song.svg'
// import {ReactComponent as Mute} from '../assets/icons/mute.svg'

// const Play = (
//     handleSongLoading,
//     handleSongPlaying,
//     handleSongFinishedPlaying
//     ) => {
//     const [isPlaying, setIsPlaying] = useState(false);

//     return (
//         <div>
//             <Sound 
//             url={ApeWarriors} 
//             playStatus={!isPlaying ? Sound.status.STOPPED : Sound.status.PLAYING} 
//             onLoading={handleSongLoading}
//             onPlay={handleSongPlaying}
//             onFinishedPlay={handleSongFinishedPlaying}
//             loop="true"/>
//             <PlayButton onClick={() => setIsPlaying(!isPlaying)}>
//                 {!isPlaying ?  <PlaySong/> : <Mute/> }

//             </PlayButton>
//         </div>
//     )
// }

// export default Play


// const PlayButton =  styled.button`
//     border: 1px solid rgba(255, 255, 250, 0.2);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//      background-color: transparent;
//     box-shadow: 0 8px 32px 0 rgba( 24, 29, 39 0.2 );
//     backdrop-filter: blur( 4px );
//     -webkit-backdrop-filter: blur( 4px );
//     border: 1px solid rgba( 255, 255, 255, 0.2 );
//     width: 45px;
//     height: 45px;
//     color: white;
//     cursor: pointer;
    
//     border-radius: 5px;
//     :hover{
//         background-color: rgba(255, 133, 2, 0.3);
//         transition: .1s ease-out;

//     }
//     :active {
//         transform: scale(1.1);
//         box-shadow: 0 8px 32px 0 rgba(255,255,0,.4);
//     }
//     img {
//         width: 25px;
//         height: 25px;
//     }
// `

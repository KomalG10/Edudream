import React, { useRef } from 'react'
import './Video-player.css'
import video from '../../assets/clgvideo.mp4'
const VideoPlayer = ({playState, setPlayState}) => {


  const player = useRef(null);
  const closedPlayer =(e)=>{
    if(e.target=== player.current)
    {
      setPlayState(false);
    }
  }
  return (
    <div className={`video-player ${playState? '':'hide'}`} ref={player} onClick={closedPlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer

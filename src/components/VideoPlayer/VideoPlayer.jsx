import './VideoPlayer.css'
import video from '../../assets/8284319-hd_1920_1080_30fps.mp4'
import { useRef } from 'react'

const VideoPlayer = ({playState, setPlayState}) => {

  const player = useRef(null)

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  }


  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} controls autoPlay muted></video>
    </div>
  )
}
export default VideoPlayer
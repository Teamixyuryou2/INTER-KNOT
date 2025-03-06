"use client"
import { useState, useRef, useEffect } from "react";
import { faArrowLeft, faArrowRight, faCirclePause, faCirclePlay, faMusic } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function MusicPlayerContainer(){
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  const [openPlayer, setOpenPlayer] = useState(0);
  function playerOpener(){setOpenPlayer(!openPlayer)};

  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const [currentTime, setCurrentTime] = useState(0);
  const [rotation, setRotation] = useState(0);
  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    setCurrentTime(progressBar.current.value);
    setRotation((prevRotation) => (prevRotation + 0.1) % 360)
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const [duration, setDuration] = useState(0);
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    audioPlayer.current.volume=0.05;
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer.current?.readyState]);

  const calculateTime = (secs) =>{
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`; 
    const seconds = Math.floor(secs % 60)
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    setCurrentTime(progressBar.current.value);
  }

  return(
    <div>
      <div onClick={playerOpener} className="absolute z-10 right-0 top-28 h-[40px] w-[40px] bg-pink-600 rounded-l-xl hover:cursor-pointer">
        <div className="flex items-center justify-center">  
          <FontAwesomeIcon icon={faMusic} className="flex scale-150 m-3 text-black"/>
        </div>
      </div>
      <div className={openPlayer ? "absolute z-10 overflow-hidden w-[300px] h-[300px] top-28 p-0 mr-1 right-10 rounded-md shadow-md text-white bg-stone-800 text-md font-bold group-focus-within:scale-100 transition-all duration-150 origin-top-right select-none" 
        : "absolute z-10 overflow-hidden items-start w-[300px] h-[300px] top-28 p-0 mr-1 right-10 rounded-md shadow-md text-white bg-stone-800 text-md font-bold scale-0 transition-all duration-150 origin-top-right select-none"}>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="flex flex-col items-center h-[65%] w-[65%] border-white border-double border-[4px] rounded-full mt-3 overflow-hidden">
            <img style={{transform:`rotate(${rotation}deg)`}} src="/assets/music/BITE!_(Album).png"/>
            <div className="flex absolute top-[100px] h-[10%] w-[10%] bg-black border outline outline-offset-8 rounded-full"></div>
          </div>
          <audio ref={audioPlayer} src="/assets/music/01. BITE!.mp3" preload="metadata"></audio>
          <div id="controls" className="flex flex-col justify-center items-center mt-2">
            <div className="flex flex-row">
              {/* current time */}
              <div className="">{calculateTime(currentTime)}</div>
              {/* progress bar */}
              <div>
                <input ref={progressBar} className="bg-pink-600 accent-pink-600 mt-1 mx-2" type="range" defaultValue="0" onChange={changeRange}/>
              </div>
              {/* duration */}
              <div>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
            </div>
            <div className="flex flex-row">
              <button className="flex items-center hover:text-pink-600"><FontAwesomeIcon className="text-[22px] mr-1" icon={faArrowLeft} /></button>
              <button className="text-white justify-center items-center w-[50px] h-[50px] text-[32px] hover:text-pink-600" onClick={togglePlayPause}>
                {isPlaying ? <FontAwesomeIcon icon={faCirclePause}/> : <FontAwesomeIcon icon={faCirclePlay}/>}
              </button>
              <button className="flex items-center hover:text-pink-600"><FontAwesomeIcon className="text-[22px] ml-1" icon={faArrowRight} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
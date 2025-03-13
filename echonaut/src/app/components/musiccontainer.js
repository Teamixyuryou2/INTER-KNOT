"use client"
import { useState, useRef, useEffect } from "react";
import { faArrowLeft, faArrowRight, faCirclePause, faCirclePlay, faMusic } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import trackList from "../../../public/assets/music/tracklist.json"

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

  const [currentSong, setCurrentSong] = useState(0);
  const songHandler = (direction) => {
    cancelAnimationFrame(animationRef.current) 
    setCurrentTime(0);  // Resets Song Duration
    setRotation(0);    // Resets Rotation
    progressBar.current.value = 0;
    if (direction == "previous"){
      if (currentSong == 0){
        setCurrentSong(trackList.length-1)
        return
      }
      setCurrentSong((currentSong-1) % trackList.length)
    }
    if (direction == "forward"){
      setCurrentSong((currentSong+1) % trackList.length)
    }
      
      setTimeout(() => {
        audioPlayer.current.currentTime = 0; // Ensure it starts from 0 every time song changes
        if (isPlaying) {
          audioPlayer.current.play();        
          animationRef.current = requestAnimationFrame(whilePlaying);
        }
      }, 100); // Small delay to allow state updates
  }

  const [currentTime, setCurrentTime] = useState(0);
  const [rotation, setRotation] = useState(0);
  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    setCurrentTime(progressBar.current.value);
    setRotation((prevRotation) => (prevRotation + 0.1) % 360)
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const [duration, setDuration] = useState(null);


  // THIS IS JUST FOR HANDLING METADATA
  const handleMetadataLoaded = () => {
    const seconds = Math.floor(audioPlayer.current.duration);
    audioPlayer.current.volume = 0.05;
    setDuration(seconds);
    progressBar.current.max = seconds;
  }

  // USE EFFECT TO UPDATE END TIME OF SONG EVERYTIME SONG IS CHANGED, LOOKS FOR METADATA. IF META DATA REAL SET TIME
  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.addEventListener('loadedmetadata', handleMetadataLoaded);
    }

    // Cleanup return
    return () => {
      if (audioPlayer.current) {
        audioPlayer.current.removeEventListener('loadedmetadata', handleMetadataLoaded);
      }
    };
  }, [currentSong]);  // This effect will run every time the currentSong changes


  // USE EFFECT JUST TO RENDER THE INITIAL FIRST RENDER SONG
  useEffect(() => {
    if (audioPlayer.current && audioPlayer.current.duration) {       //CHECKS FOR audioplayer EXIST OR NO
      handleMetadataLoaded()
    }
  }, [audioPlayer.current]); // Rerender when audioplayer exists



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
      <div className={openPlayer ? "absolute z-10 overflow-hidden w-[350px] h-[350px] top-28 p-0 mr-1 right-10 rounded-md shadow-md text-white bg-stone-800 text-md font-bold group-focus-within:scale-100 transition-all duration-150 origin-top-right select-none" 
        : "absolute z-10 overflow-hidden items-start w-[300px] h-[300px] top-28 p-0 mr-1 right-10 rounded-md shadow-md text-white bg-stone-800 text-md font-bold scale-0 transition-all duration-150 origin-top-right select-none"}>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="flex flex-col items-center h-[54%] w-[54%] border-white border-double border-[4px] rounded-full mt-3 overflow-hidden">
            <img style={{transform:`rotate(${rotation}deg)`}} src={trackList[currentSong].albumart}/>
            <div className="flex absolute top-[95px] h-[35px] w-[35px] bg-black border outline outline-offset-8 rounded-full"></div>
          </div>
          <div className="flex flex-col justify-center font-[ZZZFont] text-lg font-normal tracking-wide mt-2">
            <div className={trackList[currentSong].title.length > 23 ? "flex mx-7 w-full h-6 text-nowrap overflow-visible animate-scrollright"
              : "flex justify-center w-full h-6 text-white"}>
              {trackList[currentSong].title}
            </div>
            <div className="flex justify-center mx-7 text-base text-stone-300">
              {trackList[currentSong].artist}
            </div>
          </div>
          <audio ref={audioPlayer} src={trackList[currentSong].source} preload="metadata"></audio>
          <div id="controls" className="flex flex-col justify-center items-center mt-2 font-normal font-[ZZZFont]">
            <div className="flex flex-row">
              {/* current time */}
              <div className="">{calculateTime(currentTime)}</div>
              {/* progress bar */}
              <div>
                <input ref={progressBar} className="bg-pink-600 accent-pink-600 mt-1 mx-2 hover:cursor-pointer" type="range" defaultValue="0" onChange={changeRange}/>
              </div>
              {/* duration */}
              <div>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
            </div>
            <div className="flex flex-row">
              <button onClick={() => songHandler("previous")} className="flex items-center hover:text-pink-600"><FontAwesomeIcon className="text-[22px] mr-1" icon={faArrowLeft} /></button>
              <button className="text-white justify-center items-center w-[50px] h-[50px] text-[32px] hover:text-pink-600" onClick={togglePlayPause}>
                {isPlaying ? <FontAwesomeIcon icon={faCirclePause}/> : <FontAwesomeIcon icon={faCirclePlay}/>}
              </button>
              <button onClick={() => songHandler("forward")} className="flex items-center hover:text-pink-600"><FontAwesomeIcon className="text-[22px] ml-1" icon={faArrowRight} /></button>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes RightToLeft {
            from {
              transform: translateX(15%);
            }
            to {
              transform: translateX(-15%);
            }
          }
          
          .animate-scrollright {
          animation: RightToLeft 7s infinite ease-in-out;
          }
        `}</style>
      </div>
    </div>
  )
}
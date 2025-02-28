"use client"
import { useState } from "react";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function MusicPlayer(){
  const [toggle, setToggle] = useState(0);
  function clickHandler(){setToggle(!toggle)};
  
  return(
    <div onClick={clickHandler} className="absolute z-10 right-0 top-28 h-[40px] w-[40px] bg-pink-600 rounded-l-xl">
      <FontAwesomeIcon icon={faCirclePlay} className="flex scale-150 m-3"/>

      <div className={toggle ? "absolute w-[250px] h-[250px] top-0 p-0 mr-1 right-10 rounded-md shadow-md text-white bg-stone-700 text-md font-bold group-focus-within:scale-100 transition-all duration-150 origin-top-right" 
        : "absolute items-start w-[100px] h-[100px] top-0 p-0 mr-1 right-10 rounded-md shadow-md text-white bg-stone-700 text-md font-bold scale-0 transition-all duration-150 origin-top-right"}>
        <div className="flex flex-col justify-start overflow-hidden">
          <audio controls type="audio/mpeg" src="../../../public/assets/music/01. BITE!.mp3"/>
        </div>
      </div>
    </div>
  )
}
"use client"
import Image from 'next/image';
import { faBell, faCaretSquareUp, faEnvelope, faHouse, faPenSquare, faPenToSquare, faUser } from '@fortawesome/free-solid-svg-icons'
import { Navbutton } from './navbutton';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userSettings from '../../../public/assets/presets/presets.json';
import Friendlist from './friendlist';


export default function Navbar(){
  const [toggle, setToggle] = useState(0);
  function clickHandler(){setToggle(!toggle)};

  const [Profile, setProfile] = useState(userSettings.Ellen);
  function profileSwap(Agent){setProfile(Agent)};

    return(
      <nav className="bg-stone-800 text-white sticky top-0 left-0 z-50 justify-self-start h-screen w-full min-w-[100px] m-0 shadow-lg justify-items-center flex flex-col select-none">
        <header id="site-logo" className="flex justify-center my-3 p-3 text-2xl">
          <Image src='/assets/INTER-KNOT.png' width={80} height={80} alt="logo" />
        </header>
        
        <>
          <a onClick={clickHandler} className="flex justify-center my-2 hover:cursor-pointer group">
            <div id="user-container" className="w-[94%] rounded-lg backdrop-brightness-125">
              <div id="user" className="flex flex-col 2xl:flex-row justify-center items-center my-5">
                <Image src={Profile.profilePic} width={80} height={80} className='rounded-full border-2 border-white' alt="profile-pic"/>
                <div id="profile-text" className="hidden md:flex flex-col mx-3 p-2">
                  <div id="display-name" className="flex justify-center 2xl:justify-start font-bold text-xl tracking-wide">
                    {Profile.displayName}
                  </div>
                  <div id="username" className="flex justify-center opacity-[60%]">
                    {Profile.userName}
                  </div>
                </div>
              </div>
            </div>
          </a>

          <div className={toggle ? "absolute w-auto top-28 p-2 m-2 min-w-max left-full rounded-md shadow-md text-white bg-stone-900 text-md font-bold group-focus-within:scale-100 transition-all duration-150 origin-bottom-left" 
                : "absolute items-start w-auto top-24 p-2 m-2 min-w-max left-full rounded-md shadow-md text-white bg-stone-900 text-md font-bold scale-0 transition-all duration-150 origin-bottom-left"}>
            <div className="flex flex-col justify-start">
                Switch Accounts
                <div className='flex flex-col'>
                  <button onClick={() => profileSwap(userSettings.Belle)} className="h-10 w-[90%] m-2 flex flex-row justify-evenly">
                    <Image src={userSettings.Belle.profilePic} width={40} height={40} className="block rounded-full bg-white" alt="profile-pic"/>
                    <div className="flex p-2 justify-center text-lg">Belle</div>
                  </button>
                  <button onClick={() => profileSwap(userSettings.Ellen)} className="h-10 w-[90%] m-2 flex flex-row justify-evenly ">
                    <Image src={userSettings.Ellen.profilePic} width={40} height={40} className="rounded-full bg-white" alt="profile-pic"/>
                    <div className="flex p-2 justify-center text-lg">Ellen</div>
                  </button>
                </div>
            </div>
          </div>
        </>

        <div className="justify-center flex flex-col w-full">
          <div className="justify-center flex w-full">
            <Navbutton label="Home" graphic={faHouse} linkTo={"/"} buttonAccentColor={"text-pink-600"}/>
          </div>
          
          <div className="justify-center flex w-full">
            <Navbutton label="Messages" graphic={faEnvelope} linkTo={"/messages"} />
          </div>

          <div className="justify-center flex w-full">
            <Navbutton label="Notifications" graphic={faBell} linkTo={"/"} />
          </div>

          <div className="justify-center flex w-full">
            <Navbutton label="Profile" graphic={faUser} linkTo={"/profile"} />
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-pink-600 text-black font-bold text-xl w-[70%] xl:w-[90%] p-3 mx-[5%] my-3 flex justify-center flex-row rounded-xl hover:brightness-[85%] transition-all duration-150 ease-in">
            <div className="xl:hidden">
            <FontAwesomeIcon icon={faPenToSquare} className="xl:hidden"/>
            </div>
            <div className='hidden xl:flex row'>
              <FontAwesomeIcon icon={faCaretSquareUp} className="mt-1 mx-[5px]"/>
              <div className="">Post</div> 
            </div>
          </button>
        </div>

        <div className="hidden lg:flex justify-center mt-2">
          <div className="flex justify-center items-center rounded-xl overflow-hidden w-[90%] h-[80%]">
            <Friendlist className="overflow-scroll"/>
          </div>
        </div>
      </nav>
    );
}
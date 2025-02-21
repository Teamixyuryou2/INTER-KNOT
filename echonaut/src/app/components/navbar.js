"use client"
import Image from 'next/image';
import { faBell, faCaretSquareUp, faEnvelope, faHouse, faPenSquare, faPenToSquare, faUser } from '@fortawesome/free-solid-svg-icons'
import { Navbutton } from './navbutton';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar(){
  const [toggle, setToggle] = useState(0);
  function clickHandler(){setToggle(!toggle)}

    return(
      <nav className="sticky top-0 left-0 z-50 justify-self-start h-screen w-full min-w-[100px] m-0 bg-stone-800 text-white shadow-lg justify-items-center flex flex-col select-none">
        <header id="site-logo" className="flex justify-center my-3 p-3 text-2xl">
          <Image src='/assets/INTER-KNOT.png' width={80} height={80} alt="logo" />
        </header>
        
        <>
          <a onClick={clickHandler} className="flex justify-center my-2 hover:cursor-pointer group">
            <div id="user-container" className="w-[94%] rounded-lg backdrop-brightness-125">
              <div id="user" className="flex flex-col 2xl:flex-row justify-center items-center my-5">
                <Image src="/assets/Ellen/Avatar_Ellen_Joe.png" width={80} height={80} alt="profile-pic"/>
                <div id="profile-text" className="hidden md:flex flex-col mx-3 p-2">
                  <div id="display-name" className="flex justify-center 2xl:justify-start font-bold text-xl tracking-wide">
                    Ellen Joe
                  </div>
                  <div id="username" className="flex justify-center opacity-[60%]">
                    @nomnomshark
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className={toggle ? "absolute w-auto top-28 p-2 m-2 min-w-max left-full rounded-md shadow-md text-white bg-stone-900 text-md font-bold group-focus-within:scale-100 transition-all duration-150 origin-bottom-left" 
              : "absolute w-auto top-24 p-2 m-2 min-w-max left-full rounded-md shadow-md text-white bg-stone-900 text-md font-bold scale-0 transition-all duration-150 origin-bottom-left"}>
              Switch Accounts
          </div>
        </>

        <div className="justify-center flex flex-col w-full">
          <div className="justify-center flex w-full">
            <Navbutton label="Home" graphic={faHouse} linkTo={"/"} />
          </div>
          
          <div className="justify-center flex w-full">
            <Navbutton label="Messages" graphic={faEnvelope} linkTo={"/"} />
          </div>

          <div className="justify-center flex w-full">
            <Navbutton label="Notifications" graphic={faBell} linkTo={"/"} />
          </div>

          <div className="justify-center flex w-full">
            <Navbutton label="Profile" graphic={faUser} linkTo={"https://www.google.com"} />
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
      </nav>
    );
}
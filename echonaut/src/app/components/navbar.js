import Image from 'next/image';
import { faBell, faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar(){
    return(
      <nav className="sticky top-0 left-0 justify-self-start h-screen w-full min-w-[100px] m-0 bg-stone-800 text-white shadow-lg justify-items-center flex flex-col">
        <header id="site-logo" className="flex justify-center my-3 p-3 text-2xl">
          <Image src='/assets/INTER-KNOT.png' width={80} height={80} alt="logo" />
        </header>
        
        <div id="user" className="flex flex-col 2xl:flex-row justify-center items-center my-5">
          <Image src="/assets/Avatar_Ellen_Joe.png" width={80} height={80} alt="profile-pic"/>
          <div id="profile-text" className="hidden md:flex flex-col mx-3 p-2">
            <div id="display-name" className="flex justify-center 2xl:justify-start">
              Ellen Joe
            </div>
            <div id="username" className="flex justify-center opacity-[60%]">
              @nomnomshark
            </div>
          </div>
        </div>

        <div className="justify-center flex w-full">
          <div id="home-nav-button" className="flex justify-center xl:justify-start m-1 p-2 h-[40px] w-[90%] hover:brightness-90 hover:cursor-pointer hover:bg-stone-900 rounded-2xl transition-all duration-150 ease-in">
            <FontAwesomeIcon icon={faHouse} className="scale-[150%] mx-5 mt-[3px]" />
            <div className="hidden xl:block text-xl">
              Home
            </div>
          </div>
        </div>
        
        <div className="justify-center flex w-full">
          <div id="msg-nav-button" className="flex justify-center xl:justify-start m-1 p-2 h-[40px] w-[90%] hover:brightness-90 hover:cursor-pointer hover:bg-stone-900 rounded-2xl transition-all duration-150 ease-in">
            <FontAwesomeIcon icon={faEnvelope} className="scale-[150%] mx-5 mt-[3px]" />
            <div className="hidden xl:block text-xl">
              Messages
            </div>
          </div>
        </div>

        <div className="justify-center flex w-full">
          <div id="msg-notif-button" className="flex justify-center xl:justify-start m-1 p-2 h-[40px] w-[90%] hover:brightness-90 hover:cursor-pointer hover:bg-stone-900 rounded-2xl transition-all duration-150 ease-in">
            <FontAwesomeIcon icon={faBell} className="scale-[150%] mx-5 mt-[3px]" />
            <div className="hidden xl:block text-xl">
              Notifications
            </div>
          </div>
        </div>

        <button className="bg-slate-50 text-black w-[90%] p-3 mx-[5%] my-4 block justify-center rounded-xl hover:brightness-[85%] transition-all duration-150 ease-in">
          Echo
        </button>
      </nav>
    );
}
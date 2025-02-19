import Image from 'next/image';
import { faBell, faEnvelope, faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import { Navbutton } from './navbutton';

export default function Navbar(){
    return(
      <nav className="sticky top-0 left-0 justify-self-start h-screen w-full min-w-[100px] m-0 bg-stone-800 text-white shadow-lg justify-items-center flex flex-col">
        <header id="site-logo" className="flex justify-center my-3 p-3 text-2xl">
          <Image src='/assets/INTER-KNOT.png' width={80} height={80} alt="logo" />
        </header>
        
        <a id="user" className="flex flex-col 2xl:flex-row justify-center items-center my-5">
          <Image src="/assets/Ellen/Avatar_Ellen_Joe.png" width={80} height={80} alt="profile-pic"/>
          <div id="profile-text" className="hidden md:flex flex-col mx-3 p-2">
            <div id="display-name" className="flex justify-center 2xl:justify-start font-bold text-xl tracking-wide">
              Ellen Joe
            </div>
            <div id="username" className="flex justify-center opacity-[60%]">
              @nomnomshark
            </div>
          </div>
        </a>

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
        <div className="flex justify-center">
          <button className="bg-slate-50 text-black font-bold text-xl w-[70%] md:w-[90%] p-3 mx-[5%] my-4 block justify-center rounded-xl hover:brightness-[85%] transition-all duration-150 ease-in">
            Post
          </button>
        </div>
      </nav>
    );
}
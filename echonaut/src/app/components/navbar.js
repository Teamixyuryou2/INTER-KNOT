import { faBell, faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar(){
    return(
      <nav className="sticky top-0 left-0 justify-self-start h-screen w-[15%] min-w-[100px] m-0 bg-gray-900 text-white shadow-lg justify-items-center flex flex-col">
        <div id="site-logo" className="flex justify-center p-3">
          Echonaut 
        </div>
        <div className="justify-center flex w-full">
          <div id="home-nav-button" className="flex justify-start p-2 h-[39px] w-[90%] hover:brightness-90 hover:cursor-pointer hover:bg-gray-800 rounded-2xl transition-all duration-150 ease-in">
            <FontAwesomeIcon icon={faHouse} className="scale-100 mx-5 mt-[3px]" />
            <div className="hidden lg:block">
              Home
            </div>
          </div>
        </div>
        <div className="justify-center flex w-full">
          <div id="msg-nav-button" className="flex justify-start p-2 h-[39px] w-[90%] hover:brightness-90 hover:cursor-pointer hover:bg-gray-800 rounded-2xl transition-all duration-150 ease-in">
            <FontAwesomeIcon icon={faEnvelope} className="scale-100 mx-5 mt-[3px] lg:scale-125" />
            <div className="hidden lg:block">
              Messages
            </div>
          </div>
        </div>
        <div className="justify-center flex w-full">
          <div id="msg-notif-button" className="flex justify-start p-2 h-[39px] w-[90%] hover:brightness-90 hover:cursor-pointer hover:bg-gray-800 rounded-2xl transition-all duration-150 ease-in">
            <FontAwesomeIcon icon={faBell} className="scale-100 mx-5 mt-[3px]" />
            <div className="hidden lg:block">
              Notifications
            </div>
          </div>
        </div>
        <button className="bg-slate-50 text-black w-[90%] p-3 mx-[5%] my-2 block justify-center rounded-md hover:brightness-[85%] transition-all duration-150 ease-in">Echo</button>
      </nav>
    );
}
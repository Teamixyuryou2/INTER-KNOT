import { faHeart, faRetweet } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Notifications(){
  return(
    <div className="flex flex-col w-full h-full bg-stone-900 bg-opacity-65 hover:bg-opacity-100 transition-all duration-150 ease-in overflow-hidden font-[ZZZFont] tracking-normal font-normal">
      
      {/* Header */}
      <div className="flex w-full h-[19%] min-h-[50px] bg-black text-white text-2xl tracking-wide items-center px-2">
        <h1 className="ml-5 select-none">
          Notifications
        </h1>
      </div>

      <div className="w-full h-[81%] overflow-y-scroll overflow-x-hidden scrollbar-hidden">
        <div className= "flex flex-col text-white text-lg">
          <div className="w-full flex p-4 border-b hover:bg-black hover:cursor-pointer transition-all duration-150 ease-in">
            <FontAwesomeIcon icon={faHeart} className="text-red-500 p-1 mr-1"/> Monna liked your post
          </div>
          <div className="w-full flex p-4 border-b hover:bg-black hover:cursor-pointer transition-all duration-150 ease-in">
            <FontAwesomeIcon icon={faRetweet} className="text-green-500 p-1 mr-1"/> Monna shared your post
          </div>
          <div className="w-full flex p-4 border-b hover:bg-black hover:cursor-pointer transition-all duration-150 ease-in">
            <FontAwesomeIcon icon={faHeart} className="text-red-500 p-1 mr-1"/> Ruby liked your post
          </div>
          <div className="w-full flex p-4 border-b hover:bg-black hover:cursor-pointer transition-all duration-150 ease-in">
            <FontAwesomeIcon icon={faHeart} className="text-red-500 p-1 mr-1"/> Lynn liked your post
          </div>
          <div className="w-full flex p-4 hover:bg-black hover:cursor-pointer transition-all duration-150 ease-in">
            <FontAwesomeIcon icon={faRetweet} className="text-green-500 p-1 mr-1"/> Ruby shared your post
          </div>
        </div>
      </div>

    </div>
  )
}
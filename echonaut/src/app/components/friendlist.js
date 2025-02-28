import { faCircle, faHeart, faMoon, faRetweet } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Friendlist(){
  return(
    <div className="flex flex-col w-full h-full bg-transparent transition-all duration-150 ease-in overflow-hidden">
      
      {/* Header */}
      <div className="flex w-full h-[8%] min-h-[40px]  bg-stone-950 text-stone-300 text-lg tracking-wide items-center px-2 hover:brightness-[115%]">
        <h1 className="ml-4">
          Friends
        </h1>
      </div>

      <div className="w-full h-[90%] overflow-y-scroll overflow-x-hidden scrollbar-hidden">
        <div className= "flex flex-col bg-stone-900 gap-1 text-white text-lg">
          <a href="https://carlfeng.netlify.app/" className="w-full flex p-3 rounded-lg hover:bg-stone-700 hover:cursor-pointer transition-all duration-150 ease-in">
            <FontAwesomeIcon icon={faCircle} className="text-green-500 p-1 mr-1 scale-75"/> Carl Feng
          </a>
          <a href="https://yuyou-liu-workshop.vercel.app/" className="w-full flex p-3 rounded-lg hover:bg-stone-700 hover:cursor-pointer transition-all duration-150 ease-in">
            <FontAwesomeIcon icon={faCircle} className="text-green-500 p-1 mr-1 scale-75"/> Yuyou Liu
          </a>
          <div className="w-full flex p-3 rounded-lg hover:bg-stone-700 hover:cursor-pointer transition-all duration-150 ease-in">
            <FontAwesomeIcon icon={faCircle} className="text-green-500 p-1 mr-1 scale-75"/> Belle
          </div>
          <div className="w-full flex p-3 rounded-lg hover:bg-stone-700 hover:cursor-pointer transition-all duration-150 ease-in">
            <FontAwesomeIcon icon={faCircle} className="text-green-500 p-1 mr-1 scale-75"/> Ruby
          </div>
          <div className="w-full flex p-3 rounded-lg hover:bg-stone-700 hover:cursor-pointer transition-all duration-150 ease-in">
            <FontAwesomeIcon icon={faMoon} className="text-yellow-500 p-1 mr-1 ml-0.5 scale-75"/> Monna
          </div>
          <div className="w-full flex p-3 rounded-lg hover:bg-stone-700 hover:cursor-pointer transition-all duration-150 ease-in">
            <FontAwesomeIcon icon={faCircle} className="text-stone-500 p-1 mr-1 scale-75"/> Lynn
          </div>
          <div className="w-full flex p-3 rounded-lg hover:bg-stone-700 hover:cursor-pointer transition-all duration-150 ease-in">
            <FontAwesomeIcon icon={faCircle} className="text-stone-500 p-1 mr-1 scale-75"/> Wise
          </div>
        </div>
      </div>

    </div>
  )
}
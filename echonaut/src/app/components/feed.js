import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart ,  faComment, faRetweet, faEllipsis} from '@fortawesome/free-solid-svg-icons';

export default function Feed({ name, image , message, profilepicture }){
    return(
        <div className="bg-stone-800 min-w-[300px] w-[85%] max-w-[6000px] h-[570px] rounded-2xl overflow-hidden text-white bg-opacity-65">
            {/* Message */}
            <div className=" w-full h-[15%]">
                <div className ="relative flex flex-row w-full h-[70px] px-4 justify-center items-end gap-2 font-[ZZZFont] font-normal">
                    <div className="flex w-[60px] h-[60px] rounded-full justify-center items-center border-2 ">
                        <img src={ profilepicture } alt="" className="w-auto h-auto" />
                    </div>
                    <div className="flex bg-black mb-2 w-[70%] h-[40px] rounded-full border-4 border-stone-700 outline outline-2 outline-black items-center p-5">
                        { name }
                    </div>
                    <div className="flex mb-6 mx-1 hover:cursor-pointer">
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                </div>
            </div>

            <div className ="w-[94%] text-wrap text-overflow-hidden text-[17px] p-2 mt-[-5px] mx-3 mb-3 pb-2 font-[ZZZFont] font-normal bg-black outline outline-4 outline-stone-500/65 rounded-lg">
                { message }
            </div>

            {/*Imagery*/}
            <div className="w-full h-[64%] bg-opacity-65 overflow-hidden">
                <img src={ image } alt="" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-row bg-stone-800 w-full h-full text-white bg-opacity-65 justify-end p-3">
                <div >
                    <FontAwesomeIcon icon={faHeart} className="w-[40px] h-[40px] hover:text-red-500 hover:cursor-pointer"/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faRetweet} className="w-[40px] h-[40px] hover:text-green-500 hover:cursor-pointer"/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faComment} className="w-[40px] h-[40px] hover:text-blue-500 hover:cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}
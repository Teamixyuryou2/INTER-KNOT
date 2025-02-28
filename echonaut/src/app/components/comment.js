import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faRetweet, faComment} from '@fortawesome/free-solid-svg-icons';



export default function Comment({ name, image , message, profilepicture }){
    return(
        <div className="bg-black w-full min-h-[100px] rounded-3xl bg-stone-800 bg-opacity-65 overflow-hidden text-white ">
            {/* Picture and Name */}
            <div className="flex flex-row gap-2 p-4 border-b-2">

                <div className="flex h-[60px] w-[60px] border-2 rounded-full items-center justify-center"> E </div>
    
                <div className= "flex flex-col w-1/2 p-2 bg-stone-900 rounded-3xl text-[15px]">
                    <div>Name</div>
                    <div>@Handle</div>
                </div>

            </div>
                {/* Comment */}
            <div className="min-h-[50px] p-4 text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>

            <div className="flex flex-row bg-stone-800 w-full h-full text-white bg-opacity-65 justify-end p-4">
                <div>
                    <FontAwesomeIcon icon={faHeart} className="w-[40px] h-[40px] hover:text-red-400"/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faRetweet} className="w-[40px] h-[40px] hover:text-green-400"/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faComment} className="w-[40px] h-[40px] hover:text-blue-400"/>
                </div>
            </div>

        </div>
    )
}
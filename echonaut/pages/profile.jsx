import Navbar from "../src/app/components/navbar";
import "../src/app/globals.css"
import "../next.config.mjs"
import "../tailwind.config.mjs"
import "../postcss.config.mjs"
import EllenBG from "../public/assets/Ellen/Mindscape_Ellen_Joe_Partial.png"
import Image from "next/image";

export default function profile(){
    return(
        <div className="flex flex-row bg-[url(../public/assets/Ellen/Mindscape_Ellen_Joe_Partial.png)] bg-no-repeat bg-cover bg-[right] bg-stone-900 h-screen min-w-[500px] overflow-hidden">
            <div className="fixed flex flex-col h-full w-[200px] lg:min-w-[140px] lg:w-[17%] bg-stone-800">
                <Navbar/>
            </div>

            <div className="flex flex-col w-full h-full">
                <div className="flex justify-center text-white text-2xl">
                    "Welcome to the profile page!"
                {/* <Image src={EllenBG} fill={true} ></Image> */}
                </div>
            </div>
        </div>
    )
}
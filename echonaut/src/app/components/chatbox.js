import Image from "next/image"

export default function Chatbox(){
    return(
        <div className="flex flex-col lg:block w-full min-w-[250px] min-h-[400px] h-full bg-opacity-65 bg-stone-700 text-xs overflow-hidden">

            {/* Header */}
            <div className= "flex flex-row p-3 gap-4 items-center h-[15%] bg-stone-900 text-white">
                <div className = "flex bg-white rounded-full h-[50px] w-[50px] items-center justify-center text-black">
                    S
                </div>
                <div className="flex flex-col bg-stone-800 rounded-3xl py-2 px-5">
                    <div className="text-lg">
                        Monna
                    </div>
                    <div>
                        @handle
                    </div>
                </div>
            </div>

            {/* Chatbox Body*/}
            <div className="flex h-[65%] min-w-[100px] overflow-y-auto overflow-x-hidden scrollbar-hidden shadow-2xl">
                <div className="flex flex-col w-full ">

                    {/*Text Bubbles Layout FRIEND*/}
                    <div className="flex flex-col p-2 items-start">
                        <div className=" bg-stone-900 text-white p-4 rounded-3xl"> 
                            Ellen! Where are you?
                        </div>
                    </div>
                    {/*Text Bubbles Layout USER*/}
                    <div className="flex flex-col p-2 mt-2 items-end">
                        <div className=" bg-pink-600 p-4 rounded-3xl"> 
                            <Image height={80} width={80} alt="ellen sleep" style={{objectFit: "contain"}} src={"/assets/Ellen/Zenless_Zone_Zero_Ridu_Stroll_Sticker_Pack_1_Ellen.png"} />
                        </div>
                    </div>
                    {/*Text Bubbles Layout FRIEND*/}
                    <div className="flex flex-col p-1 items-start">
                        <div className=" bg-stone-900 text-white p-4 rounded-3xl"> 
                            Hellooooo? Earth to Ellen?
                        </div>
                    </div>
                    {/*Text Bubbles Layout FRIEND*/}
                    <div className="flex flex-col p-1 mb-2 items-start">
                        <div className=" bg-stone-900 text-white p-4 rounded-3xl"> 
                            Come check out the new snack shop!
                        </div>
                    </div>
                    {/*Text Bubbles Layout USER*/}
                    <div className="flex flex-col p-2 items-end">
                        <div className=" bg-pink-600 p-4 rounded-3xl"> 
                            theres a new snack shop?
                        </div>
                    </div>
                    {/*Text Bubbles Layout FRIEND*/}
                    <div className="flex flex-col p-2 items-start">
                        <div className=" bg-stone-900 text-white p-4 rounded-3xl"> 
                            Yeah! Let's go!
                        </div>
                    </div>
                    {/*Text Bubbles Layout USER*/}
                    <div className="flex flex-col p-2 items-end">
                        <div className=" bg-pink-600 p-4 rounded-3xl"> 
                            omw, see u guys soon
                        </div>
                    </div>  
                
                </div>
            </div>

            <div className= "flex flex-row h-[20%] min-h-[100px] w-full bg-stone-900 p-2 gap-5 items-center">

                
                {/* Chatbox Input */}
                <div className="p-1 bg-white ml-2 rounded-3xl w-3/4 max-h-[100px] break-words">
                    <textarea className="w-full h-[40px] rounded-3xl text-lg p-2 outline-0 resize-none scrollbar-hidden scroll-smooth">
                    </textarea>
                </div>
                {/* Chatbox send */}
                <div className="flex bg-white justify-center items-center rounded-full w-[50px] h-[50px] hover:brightness-[90%] hover:cursor-pointer select-none"> 
                    Send
                </div>

            </div>

        </div>
    )
}
'use client'
import Image from "next/image";
import Navbar from "../components/navbar";
import userData from '../../../public/assets/users/userdata.json'

export default function Home() {

  {/* Inclusive Randomizer */}
  const min = 0 
  const max = 2
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="flex flex-row bg-[url(../../public/assets/Ellen/Mindscape_Ellen_Joe_Partial.png)] bg-no-repeat bg-cover bg-[right] bg-stone-900 h-screen min-w-[400px] overflow-hidden">

      {/* Navbar */}
      <div className="fixed relative flex flex-col h-full w-[200px] lg:min-w-[140px] lg:w-[17%] bg-stone-800">
        <Navbar/>
      </div>
      <div className="flex flex-col w-full">
        {/* Message Page Container */}
        <div className="flex flex-row h-full w-full justify-center items-center">

          <div className="flex flex-row  h-3/4 w-full gap-1 justify-center items-center">

            <div className="flex flex-col bg-opacity-60 bg-stone-600 h-full hidden sm:block sm:w-1/5 md:min-w-[150px] lg:w-1/5 rounded-3xl p-4 justify-center items-center"> Friend </div>
            <div className="flex bg-stone-600 h-full w-[90%] bg-opacity-60 sm:min-w-[400px] sm:w-3/5 lg:w-2/5 rounded-3xl p-4 justify-center items-center">Chat Box</div>
            <div className="flex flex-col bg-stone-600 h-full bg-opacity-60 hidden lg:block lg:w-1/5 rounded-3xl p-4 justify-center items-center"> Whatever box</div>

          </div>

        </div>
      </div>

    </div>
  );
}

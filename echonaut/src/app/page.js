import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex flex-row bg-stone-900 h-screen overflow-hidden">

      {/* Navbar */}
      <div className="fixed relative flex flex-col h-full w-[150px] lg:min-w-[100px] lg:w-[17%] bg-stone-800 z-">
        <Navbar/>

      </div>
      <div className="sticky flex z-50">
        <div className="fixed flex h-[75px] w-[95%] bg-stone-300 justify-center p-50 opacity-60">
          <div className="flex flex-col h-[30px] w-[400px] opacity-[50%] bg-stone-800 rounded-2xl px-8 justify-center">
            <input type="text" className="bg-transparent border-none focus:outline-none text-white" placeholder="Search . . ."/>
          </div>
        </div>
      </div>

      {/* MainPage */}
      <div className="flex flex-row w-full h-full py-10 justify-center">

        {/* Personal */}

        <div className="flex flex-col h-full w-1/3 gap-3 items-end w-1/3 text-black">
          <div className="hidden xl:block bg-white min-w-[300px] w-[30%] xl:h-[500px]">
            Hello
          </div>
          <div className="hidden xl:block bg-white min-w-[300px] w-[30%] xl:h-[500px] ">
            Hello
          </div>
          <div className="hidden xl:block bg-white min-w-[300px] w-[30%] xl:h-[500px] ">
            Hello
          </div>
        </div>

        {/* Feed */}

        <div className="relative flex flex-col h-full min-w-[400px] w-[60%] lg:w-1/4 gap-3 items-center w-1/3 text-black">
          {/*Search */}

          <div className="bg-white min-w-[300px] w-[90%] max-w-[600px] h-1/2 ">

          </div>
          <div className="bg-white min-w-[300px] w-[90%] max-w-[600px] h-1/2 ">

          </div>

        </div>


        {/* For you */}

        <div className="flex flex-col h-full w-1/3 gap-3 items-start w-[50%] lg:w-1/3 text-black ">
          <div className="hidden md:block bg-white min-w-[200px] w-[70%]  h-[500px]">
            Hey
          </div>
          <div className="hidden md:block bg-white min-w-[200px] w-[70%] h-[500px] ">

          </div>
          <div className="hidden md:block bg-white min-w-[200px] w-[70%]  h-[500px] ">

          </div>
        </div>

      </div>

      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center w-full min-h-screen gap-1  font-[family-name:var(--font-geist-sans)]">

        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="bg-white min-w-[300px] w-[30%] lg:h-[500px] ">

          </div>
          <div className="bg-white min-w-[300px] w-[30%] lg:h-[500px] ">

          </div>
          <div className="bg-white min-w-[300px] w-[30%] lg:h-[500px] ">

          </div>
        </div>
        
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="bg-white min-w-[300px] w-[30%] lg:h-[500px] ">

          </div>
          <div className="bg-white min-w-[300px] w-[30%] lg:h-[500px] ">

          </div>
          <div className="bg-white min-w-[300px] w-[30%] lg:h-[500px] ">

          </div>
        </div>

        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="bg-white min-w-[300px] w-[30%] lg:h-[500px] ">

          </div>
          <div className="bg-white min-w-[300px] w-[30%] lg:h-[500px] ">

          </div>
          <div className="bg-white min-w-[300px] w-[30%] lg:h-[500px] ">

          </div>
        </div>

        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
        </footer>

      </div> */}

    </div>
  );
}

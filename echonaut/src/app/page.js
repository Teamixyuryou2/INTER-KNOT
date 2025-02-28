import Image from "next/image";
import Navbar from "./components/navbar";
import Feed from "./components/feed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import userData from '../../public/assets/users/userdata.json'
import Weather from "./components/weather";
import Chatbox from "./components/chatbox";
import Notifications from "./components/notifications";

export default function Home() {

  {/* Inclusive Randomizer */}
  const min = 0 
  const max = 2
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;


  return (
    <div className="flex flex-row bg-[url(../../public/assets/Ellen/Mindscape_Ellen_Joe_Partial.png)] bg-no-repeat bg-cover bg-[right] bg-stone-900 h-screen min-w-[400px] overflow-hidden">

      {/* Navbar */}
      <div className="relative flex flex-col h-full w-[140px] lg:min-w-[140px] lg:w-[17%] bg-stone-800">
        <Navbar/>
      </div>
      
      <div className="flex flex-col w-full">

        {/* MainPage */}
        <div className="flex flex-row w-full h-full py-10 justify-center text-xl font-bold ">

          {/* Personal */}

          <div className="flex flex-col h-full gap-5 items-end lg:w-1/3 max-w-[600px] text-black bg-opacity-65 md:pr-6">


            {/* Profile Box */}
            <div className="hidden lg:block w-[70%] min-h-[200px] min-w-[250px] lg:h-[300px] rounded-3xl bg-opacity-65 overflow-hidden">
              <Notifications/>
            </div>

            {/* Chatbox */}
            <div className="hidden flex-col lg:block w-[70%] min-w-[250px] min-h-[400px] h-[500px] rounded-3xl overflow-hidden">
              <Chatbox/>
            </div>

          </div>

          {/* Feed */}

          <div className="relative flex flex-col h-screen min-w-[455px] md:min-w-[400px] w-[60%] max-w-[450px] lg:w-full  items-center text-black overflow-y-scroll pr-[60px] md:pl-0 md:pr-0 sm:pr-4 lg:pr-0 md:border-r-2 lg:border-x-2 scrollbar-hidden overflow-x-hidden">

            <div className="relative flex flex-col min-w-[450px] w-full lg:w-1/4 my-5 items-center text-black space-y-4 ">
              {/* Turn this into a component */}


              <Feed name={userData.Lighter.name} message={userData.Lighter.posts[randomNumber]} image={userData.Lighter.image[randomNumber]} profilepicture={userData.Lighter.avatar}/>
              <Feed name={userData.Koleda.name} message={userData.Koleda.posts[randomNumber]} image={userData.Koleda.image[randomNumber]} profilepicture={userData.Koleda.avatar}/>
              <Feed name={userData.Caesar.name} message={userData.Caesar.posts[randomNumber]} image={userData.Caesar.image[randomNumber]} profilepicture={userData.Caesar.avatar}/>

              <Feed name={userData.Lighter.name} message={userData.Lighter.posts[randomNumber2]} image={userData.Lighter.image[randomNumber]} profilepicture={userData.Lighter.avatar}/>
              <Feed name={userData.Koleda.name} message={userData.Koleda.posts[randomNumber2]} image={userData.Koleda.image[randomNumber]} profilepicture={userData.Koleda.avatar}/>
              <Feed name={userData.Caesar.name} message={userData.Caesar.posts[randomNumber2]} image={userData.Caesar.image[randomNumber]} profilepicture={userData.Caesar.avatar}/>

              <Feed name={userData.Lighter.name} message={userData.Lighter.posts[randomNumber]} image={userData.Lighter.image[randomNumber]} profilepicture={userData.Lighter.avatar}/>
              <Feed name={userData.Koleda.name} message={userData.Koleda.posts[randomNumber]} image={userData.Koleda.image[randomNumber]} profilepicture={userData.Koleda.avatar}/>
              <Feed name={userData.Caesar.name} message={userData.Caesar.posts[randomNumber]} image={userData.Caesar.image[randomNumber]} profilepicture={userData.Caesar.avatar}/>

              <Feed name={userData.Lighter.name} message={userData.Lighter.posts[randomNumber2]} image={userData.Lighter.image[randomNumber]} profilepicture={userData.Lighter.avatar}/>
              <Feed name={userData.Koleda.name} message={userData.Koleda.posts[randomNumber2]} image={userData.Koleda.image[randomNumber]} profilepicture={userData.Koleda.avatar}/>
              <Feed name={userData.Caesar.name} message={userData.Caesar.posts[randomNumber2]} image={userData.Caesar.image[randomNumber]} profilepicture={userData.Caesar.avatar}/>

              
            </div>

          </div>


          {/* For you */}
          
          <div className="flex flex-col h-full md:w-1/3 w-0 gap-5 items-start max-w-[600px] lg:w-1/3 text-black pl-6 opacity-85">

            {/*Search*/}
            <div className="h-[100px] w-[70%] min-w-[200px] items-center top-0 left-0 opacity-70 focus:opacity-100 hidden md:block">
              <div className="flex flex-row h-[40px] w-full opacity-[60%] focus:opacity-[100%] bg-stone-200 rounded-3xl justify-center items-center px-2">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-[40px] h-[40px] " />
                <input type="text" className="bg-transparent h-[30px] w-full border-none focus:outline-none text-white invert" placeholder="Search . . ."/>
              </div>
            </div>

            {/* <div className="hidden md:block min-w-[200px] w-[70%] min-h-[200px] min-w-[200px] h-[500px] rounded-3xl p-6 bg-stone-500 bg-opacity-65">

            </div> */}

            <div className="flex-col hidden md:block w-[70%] min-h-[270px] min-w-[200px] h-[500px] rounded-3xl bg-stone-600 bg-opacity-65 overflow-hidden">

              <div className="flex w-full h-[17%] min-h-[50px] bg-black text-white text-2xl tracking-wide items-center px-2">
                <h1 className="ml-5">
                Trending
                </h1>
              </div>

              <div className="w-full h-[68%] overflow-y-auto overflow-x-hidden scrollbar-hidden">
                <div className= "flex flex-col ">
                  <div className="bg-stone-500 w-full h-[60px] p-4"># H.A.N.D</div>
                  <div className="bg-stone-400 w-full h-[60px] p-4"># HollowZERO</div>
                  <div className="bg-stone-300 w-full h-[60px] p-4"># 404Event</div>
                  <div className="bg-stone-200 w-full h-[60px] p-4"># BoxGalaxy</div>
                  <div className="bg-stone-100 w-full h-[60px] p-4"># EriduForYou</div>
                  <div className="bg-stone-100 w-full h-[60px] p-4"># Ehn-a-Nu</div>
                  <div className="bg-stone-300 w-full h-[60px] p-4"># ChatisThisREAL?</div>
                  <div className="bg-stone-200 w-full h-[60px] p-4"># GoldenBangboo</div>
                  <div className="bg-stone-100 w-full h-[60px] p-4"># Vision</div>
                </div>
              </div>

              <div className="flex w-full h-[15%] min-h-[30px] bg-black text-white text-lg justify-end items-center px-10 py-3">
                <div>
                  {"View More >"}
                </div>
              </div>

            </div>

            <div className="hidden md:block min-w-[200px] w-[70%] min-h-[320px] h-[550px] rounded-3xl p-6 bg-gradient-to-b from-sky-500 to-indigo-500 bg-opacity-65">
              <Weather/>
            </div>

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

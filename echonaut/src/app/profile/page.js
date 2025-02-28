'use client'
import Image from "next/image";
import Navbar from "../components/navbar";
import Feed from "../components/feed";
import Comment from "../components/comment";
import Chatbox from "../components/chatbox";
import Notifications from "../components/notifications";
import Loading from "./loading.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import userData from '../../../public/assets/users/userdata.json'
import { useState, useEffect} from 'react';
import Weather from "../components/weather";

export default function Home() {

  {/* Inclusive Randomizer */}
  const min = 0 
  const max = 2
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;

  const [activeTab, setActiveTab] = useState("posts")
  const [loading, setLoading] = useState(true)   //Loading Switch
  const [fadeOut, setFadeOut] = useState(false);  //Loading Fade
  
  //Loading Timer
  useEffect(() => {

    const timer = setTimeout(() => {
      setFadeOut(true); // Trigger fade-out before hiding

      setTimeout(() => {
        setLoading(false); // Hide after fade-out
      }, 400); // Make sure fade-out lasts for 1 second (1000ms)

    }, 200); // Start fading out after 200ms

    return () => clearTimeout(timer);
  }, []);

  function renderComponent(){
    switch(activeTab){
      case "posts":
        /* posts should generate user's posts or reposts */
        return <div className="w-full">
                  <div className="flex flex-col justify-center items-center gap-3 py-5">
                    <Feed /> 
                    <Feed />
                    <Comment />
                    <Feed /> 
                    <Comment />
                    <Feed />
                    <Feed /> 
                  </div>
               </div>

      case "replies":
        /* replies should generate user's replies */
        return <div className="w-full">
                  <div className="flex flex-col justify-center items-center gap-4 py-4">

                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />

                  </div>
               </div>

      case "media":
        /* media should show all images user has posted */
        return <div className="w-full">
                  <div className="grid grid-cols-3 gap-2 repeat(3, 1fr) px-2">
                    <div className="h-[150px] bg-stone-400"> green</div>
                    <div className="h-[150px] bg-stone-300">black</div>
                    <div className="h-[150px] bg-stone-200">white</div>
                    <div className="h-[150px] bg-stone-400"> green</div>
                    <div className="h-[150px] bg-stone-300">black</div>
                    <div className="h-[150px] bg-stone-200">white</div>
                    <div className="h-[150px] bg-stone-400"> green</div>
                    <div className="h-[150px] bg-stone-300">black</div>
                    <div className="h-[150px] bg-stone-200">white</div>
                    <div className="h-[150px] bg-stone-400"> green</div>
                    <div className="h-[150px] bg-stone-300">black</div>
                    <div className="h-[150px] bg-stone-200">white</div>
                    <div className="h-[150px] bg-stone-300">black</div>
                    <div className="h-[150px] bg-stone-200">white</div>
                  </div>
               </div>

      case "likes":
        /*likes should show posts, comments, or replies the user has liked*/
        return <div className="w-full">
                  <div className="flex flex-col justify-center items-center gap-3 py-5">
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
                    <Comment />
                    <Comment />
                    <Feed />
                    <Comment />
                    <Feed /> 
                    <Comment />
                    <Feed />
                    <Feed /> 
                  </div>
              </div>
              
    }
  }


  return (
    <div className="flex flex-row bg-[url(../../public/assets/Ellen/Mindscape_Ellen_Joe_Partial.png)] bg-no-repeat bg-cover bg-[right] bg-stone-900 h-screen min-w-[400px] overflow-hidden">

      {/* Navbar */}
      <div className="fixed relative flex flex-col h-full w-[200px] lg:min-w-[140px] lg:w-[17%] bg-stone-800">
        <Navbar/>
      </div>


      <div className="flex flex-col w-full">

        {/* Loading Screen */}
        {loading && (<div className={`fixed w-full h-full z-50  ${fadeOut ? "opacity-0" : "opacity-100"} transition-opacity duration-1000 overflow-hidden`}> <Loading /> </div> )} 

        {/* MainPage */}
        <div className="flex flex-row w-full h-full py-10 justify-center text-xl font-bold ">

          <div className="flex flex-col h-full gap-5 items-end lg:w-1/3 max-w-[600px] text-black bg-opacity-65 md:pr-6">

            {/* Profile Box */}
            <div className="hidden lg:block w-[70%] min-h-[200px] min-w-[250px] lg:h-[300px] rounded-3xl bg-opacity-65 overflow-hidden">
              <Notifications/>
            </div>

            {/* Chatbox */}
            <div className="hidden flex-col lg:block w-[70%] min-w-[250px] min-h-[400px] h-[500px] rounded-3xl overflow-hidden">
              <Chatbox />
            </div>

          </div>


          {/* Profile */}

          <div className="flex flex-col h-screen min-w-[300px] md:min-w-[500px] w-[80%] max-w-[500px] lg:w-full items-center text-black overflow-y-scroll  md:pl-0 md:pr-0  lg:pr-0 md:border-r-2 lg:border-x-2 scrollbar-hidden overflow-x-hidden">


            <div className="flex flex-col bg-stone-500 w-full my-0 items-center text-black">

              <div className="flex flex-col h-[600px] w-full bg-stone-400">

                {/* Background */}
                <div className="w-full min-h-[300px] bg-center bg-[url(../../public/assets/Ellen/Ellen_banner3.png)] bg-no-repeat bg-cover"></div>

                {/* Header*/}
                <div className="relative w-full min-h-[200px] h-full bg-stone-800">

                  {/* Profile Picture */}

                  <div className="absolute -top-20 md:-top-20 mx-5 w-[125px] h-[125px] md:w-[175px] md:h-[175px] bg-white rounded-full border-4 border-stone-700">
                    <div className="flex overflow-hidden h-full w-full bg-cover bg-no-repeat bg-[url(../../public/assets/Ellen/Avatar_Ellen_Joe.png)]"></div>  
                  </div>
                  {/* Name */} 
                  <div className="flex flex-col pt-[110px] px-5 text-overflow-hidden text-white">
                    <div className="font-bold text-3xl">
                      Ellen Joe
                    </div>
                    <div>
                      @nomnomshark
                    </div>
                    <div className="mt-5">
                    shork gorl
                    </div>
                  </div>


                </div>

              </div>

              {/* Changeable UI Controller */}
              <div className="flex flex-row w-full h-[40px] bg-stone-700 justify-around text-center text-white text-sm sm:text-lg select-none">
                <div className="relative w-1/4 pb-3 h-full flex items-end justify-center group" onClick={() => setActiveTab("posts")}>
                  Posts
                  <div className="group hidden group-hover:block absolute bottom-0 bg-pink-600 w-1/2 h-[5px]"></div>
                </div>
                <div className="relative w-1/4 pb-3 h-full flex items-end justify-center group" onClick={() => setActiveTab("replies")}>
                  Replies
                  <div className="group hidden group-hover:block absolute bottom-0 bg-pink-600 w-1/2 h-[5px]"></div>
                </div>
                <div className="relative w-1/4 pb-3 h-full flex items-end justify-center group" onClick={() => setActiveTab("media")}>
                  Media
                  <div className="group hidden group-hover:block absolute bottom-0 bg-pink-600 w-1/2 h-[5px]"></div>
                </div>
                <div className="relative w-1/4 pb-3 h-full flex items-end justify-center group" onClick={() => setActiveTab("likes")}>
                  Likes
                  <div className="group hidden group-hover:block absolute bottom-0 bg-pink-600 w-1/2 h-[5px]"></div>
                </div>
              </div>


              {/* Changeable UI*/}
              <div className="flex w-full" >
                {renderComponent()}
              </div>
              
            </div>

          </div>


          {/* For you */}
          
          <div className="flex flex-col h-full md:w-1/3 w-0 gap-5 items-start  max-w-[600px] lg:w-1/3 text-black pl-4 opacity-85">

            {/*Search*/}
            <div className="flex h-[100px] w-[70%] min-w-[200px] items-center top-0 left-0 opacity-60 hidden md:block">
              <div className="flex flex-row h-[40px] w-full opacity-[50%] focus:opacity-[100%] bg-stone-200 rounded-3xl justify-center items-center px-2">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-[40px] h-[40px] " />
                <input type="text" className="bg-transparent h-[30px] w-full border-none focus:outline-none text-white invert" placeholder="Search . . ."/>
              </div>
            </div>

            {/* Trending Componenet */}
            <div className="flex-col hidden md:block w-[70%] min-h-[200px] min-w-[200px] h-[500px] rounded-3xl bg-stone-600 bg-opacity-65 overflow-hidden">

              <div className="flex w-full h-[17%] bg-black text-white text-xl items-center px-2">
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

              <div className="flex w-full h-[15%] bg-black text-white text-xl justify-end px-10 py-3">

                {"View More >"}
              </div>

            </div>

            <div className="hidden md:block min-w-[200px] w-[70%] min-h-[200px] h-[500px] rounded-3xl p-6 bg-gradient-to-b from-sky-500 to-indigo-500 bg-opacity-65">
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

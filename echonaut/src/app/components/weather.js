"use client"
import { useEffect, useState } from "react";

export default function Weather(){
    const apiKey = "62c8370009022c37b85d7235fdb4dfac"
    let city = "New York"

    const [currWeather, setWeather] = useState({});

    async function getWeatherData(){
        try{
            fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
            .then((response) => response.json())
            .then((data) => {
                setWeather(data)
            });
        } catch {
            
        }
    };

    useEffect(() => {
        getWeatherData();
    }, []);
   
    // Clock
    const [time, setTime] = useState(new Date());
    const [dayNight, setDayNight] = useState(new Date().getHours());
    function formatTime(){
        let hours = time.getHours().toString().padStart(2, "0");
        let minutes = time.getMinutes().toString().padStart(2, "0");
        let seconds = time.getSeconds().toString().padStart(2, "0");
        let day = time.getDay();
        let month = time.getMonth();
        let date = time.getDate();
        let dayString = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let monthString = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        return `${hours}:${minutes}:${seconds} - ${dayString[day]} ${monthString[month]} ${date}`;
    }
    
    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
            setDayNight(new Date().getHours());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, []);

    if(!currWeather || !currWeather.current){
        return <div className="flex justify-center items-center h-full w-full text-center text-white text-xl bg-gradient-to-b from-sky-400/75 to-indigo-500/75 rounded-xl">Loading Weather Data...</div>
    }

    const tempRounded = currWeather.current ? Math.round(currWeather.current.temp_f) : null;

    return(
        <div id="widget-wrapper" className={(dayNight < 18) && (dayNight > 6) ? "flex flex-col w-full h-full text-white text-center items-center justify-center font-[Rubik] font-normal select-none p-6 bg-gradient-to-b from-sky-400/75 to-indigo-500/75 rounded-xl"
            : "flex flex-col w-full h-full text-white text-center items-center justify-center font-[Rubik] font-normal select-none p-6 bg-gradient-to-b from-sky-900/75 to-indigo-600/75 rounded-xl"
        }>
            <div id="weather-graphic" className="scale-[130%] p-3">
                <img className="" src={currWeather.current.condition.icon} />
            </div>
            <div id="temperature" className="flex text-4xl xl:text-5xl 2xl:text-[70px] justify-center p-0 xl:p-1">
                {tempRounded != null ? `${tempRounded}°F` : "Loading..."}
            </div>
            <div id="city-name" className="text-xl xl:text-2xl 2xl:text-3xl p-1">New Eridu</div>
            <div id="date-time" className="text-base xl:text-xl p-2">{formatTime()} </div>
            <div className="text-base xl:text-xl">Ether particle concentration: {currWeather.current.humidity}%</div>
        </div>
    )
}
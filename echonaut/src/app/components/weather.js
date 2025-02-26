"use client"
import { useEffect, useState } from "react";

export default function Weather(){
    const apiKey = "62c8370009022c37b85d7235fdb4dfac";
    let city = "New York"

    const [currWeather, setWeather] = useState({});

    async function getWeatherData(){
        try{
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
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
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, []);

    if(!currWeather || !currWeather.main){
        return <div className="flex justify-center items-center h-full w-full text-center text-white text-xl">Loading Weather Data...</div>
    }

    const tempRounded = currWeather.main ? Math.round(currWeather.main.temp) : null;

    return(
        <div id="widget-wrapper" className="flex flex-col w-full h-full bg-transparent text-white text-center items-center justify-center font-[Rubik] font-normal select-none">
            <div id="weather-graphic" className="scale-[200%] p-4">☀️</div>
            <div id="temperature" className="flex text-4xl xl:text-5xl 2xl:text-[70px] justify-center p-0 xl:p-1">
                {tempRounded != null ? `${tempRounded}°F` : "Loading..."}
            </div>
            <div id="city-name" className="text-xl xl:text-2xl 2xl:text-3xl p-1">New Eridu</div>
            <div id="date-time" className="text-base xl:text-xl p-2">{formatTime()} </div>
            <div className="text-base xl:text-xl">Ether particle concentration: {currWeather.main.humidity}%</div>
        </div>
    )
}
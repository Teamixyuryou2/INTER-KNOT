"use client"
import { useEffect } from "react";

export default function Weather(){
    const apiKey = "62c8370009022c37b85d7235fdb4dfac";
    let city = "New York"

    async function getWeatherData(city){
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        try{
            const response = await fetch(apiUrl);
            const weatherData = await response.json();
            console.log(weatherData);
            return weatherData;
        }   
        catch(error){
            throw new error("Could not fetch weather data")
        }
    }

    // getWeatherData.then(

    // )
    useEffect(()=>{
        getWeatherData(city);
    },[])

    console.log(getWeatherData("New York"));
    //  function displayWeatherInfo(){
    //     const weatherData = getWeatherData("New York");
    //     const weatherData2 = {name: city,
    //         main: {temp, humidity},
    //     }
    //  }

    return(
        <div id="widget-wrapper" className="flex flex-col w-full h-full bg-transparent text-white text-center items-center justify-center font-[Rubik] font-normal select-none">
            <div id="weather-graphic" className="scale-[200%] p-4">☀️</div>
            <div id="temperature" className="flex text-5xl xl:text-[70px] justify-center p-0 xl:p-1">
                69°F    
            </div>
            <div id="city-name" className="text-xl xl:text-3xl p-1">{getWeatherData.coord}</div>
            <div id="date-time" className="text-lg xl:text-xl p-2">06:09 - Monday June 9</div>
            <div className="text-lg xl:text-xl">Ether particle concentration: 11%</div>
        </div>
    )
}
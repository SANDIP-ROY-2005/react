import React from 'react'
import "../css/weather.css";
import { useState } from 'react'; 
import Navbar from './Navbar';
import getWeather from './api.js';
const Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState([]);
    const getWeatherbycity =  async () => {
        const weatherData = await getWeather(city);
        console.log(weatherData);
        setWeather(weatherData); 
         setCity("");
    }


    return (
         <>
         <Navbar/>
      
        <body className="bg-image">
            <div className="container">
                <div className="dataGrid">
                    <div className="searchbox">
                        <input type="text"  value={city} onChange={(e)=>setCity(e.target.value)} 
                        placeholder='Enter CITY name' ></input>
                        <button onClick={()=> getWeatherbycity()}>SEARCH</button>
                    </div>
                    <div className="location-not-found">
                        <h1>SORRY,Loction not found!!!</h1>
                        <img src="../img/404.png" ></img>
                    </div>
                    <div className="weth-body"  >
                        <img src="../img/weathericon.png" alt="" className="image" ></img>
                         <h2 className="temp">Temperatue </h2>
                        {/* <h2 className="temp" >{Math.round(weather.main.temp-273) +"°C"} </h2> */}
                        <h4 className="city">{weather.name}</h4>
                        <h4 className="descp"> description</h4>
                        {/* <h4 className="descp">{weather.weather[0].description}</h4> */}
                    </div>
                    <div className="detail">
            <div className="col">
                {/* <i class="fa-solid fa-droplet"></i> */}
                <div>
                    <h5 className="humid"  >~</h5>
                    <p>humidity</p>
                </div>
            </div>
            <div className="col">
                {/* <i class="fa-solid fa-wind"></i> */}
                <div>
                    <h5 className="spee" >~</h5>
                    <p>wind speed</p>
        
                     
                </div>
            </div>
         </div>
                </div>
            </div>
            



        </body>
        <footer> 
         <div className="weather-footer">
         <div className="social-logo-w">
            <p>FOLLOW US ON : </p>
            <img src="../img/fflogo.png" className="social-logo-img"></img>
            {/* <img src="../img/tlogo.png" className="social-logo-img"></img> */}
            <img src="../img/ilogo.png" className="social-logo-img"></img>
            <img src="../img/llogo.png" className="social-logo-img"></img>
            <img src="../img/yt.png" className="social-logo-img"></img>
         </div>
         <div className="weather-credits">
            <p> Made by @Sandip </p>
         </div>
     </div>
     </footer>
     </>
    )
}

export default Weather

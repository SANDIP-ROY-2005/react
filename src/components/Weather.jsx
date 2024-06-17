import React from 'react'
import "../css/weather.css";
import { useState } from 'react'; 
 
import getWeather from './api.js';
import Footer from './Footer.jsx';
// const Weather = () => {
//     const [city, setCity] = useState("");
//     const [weather, setWeather] = useState([]);
//     const getWeatherbycity =  async () => {
//         const weatherData = await getWeather(city);
//         console.log(weatherData);
//         setWeather(weatherData); 
//         console.log(weather);
//          setCity("");
//     }


//     return (
//          <>
       
      
//         <body className="bg-image">
//             <div className="container">
//                 <div className="dataGrid">
//                     <div className="searchbox">
//                         <input type="text"  value={city} onChange={(e)=>setCity(e.target.value)} 
//                         placeholder='Enter CITY name' ></input>
//                         <button onClick={()=> getWeatherbycity()}>SEARCH</button>
//                     </div>
//                     <div className="location-not-found">
//                         <h1>SORRY,Loction not found!!!</h1>
//                         <img src="../img/404.png" ></img>
//                     </div>
//                     <div className="weth-body"  >
//                         <img src="../img/weathericon.png" alt="" className="image" ></img>
//                          <h2 className="temp">Temperatue </h2>
                       
//                         <h4 className="city">{weather.name}</h4>
//                         <h4 className="descp"> description</h4>
                        
//                     </div>
//                     <div className="detail">
//             <div className="col">
                
//                 <div>
//                     <h5 className="humid"  >~</h5>
//                     <p>humidity</p>
//                 </div>
//             </div>
//             <div className="col">
                
//                 <div>
//                     <h5 className="spee" >~</h5>
//                     <p>wind speed</p>
        
                     
//                 </div>
//             </div>
//          </div>
//                 </div>
//             </div>
            



//         </body>
//         <footer> 
//          <div className="weather-footer">
//          <div className="social-logo-w">
//             <p>FOLLOW US ON : </p>
//             <img src="../img/fflogo.png" className="social-logo-img"></img>
           
//             <img src="../img/ilogo.png" className="social-logo-img"></img>
//             <img src="../img/llogo.png" className="social-logo-img"></img>
//             <img src="../img/yt.png" className="social-logo-img"></img>
//          </div>
//          <div className="weather-credits">
//             <p> Made by @Sandip </p>
//          </div>
//      </div>
//      </footer>
//      </>
//     )
// }
 

const Weather = () => {
  return (
    <> 
          <div className='home-container'>
        
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
            <img src="../img/home-banner-image.png" ></img>
            </div>
            <div className='home-text-section'>
                <h1 className='primary-heading'>
                Enjoy Tasty Meals, Straight to Your Plate, Always Fresh and Hot!
                </h1>
                <p className='primary-text'>
                Dive into our yummy meals, made just for you and brought to your door, so you can enjoy every bite without waiting!
                </p>
                <button className='secondary-button'>
                    Order Now  
                </button>
            </div>
            <div className='home-image-section'>
            {/* <img src="../img/home-banner-image.png" ></img> */}
            </div>
        </div>
    </div>

    <Footer/>
    </>
      
     
  )
}

 



export default Weather

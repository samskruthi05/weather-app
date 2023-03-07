import Search from "./Components/Search/Search";
import './App.css';
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";
function App() {

  const [currentWeather, setCurrentWeather]=useState(null);
  const [forecastWeather, setforecastWeather]=useState(null);
  const handleOnSearchChange=(data)=>
  {
      const [lat,lon]=data.value.split(" ");
      const currentWeatherFetch=fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
      const forecastFetch=fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
      Promise.all([currentWeatherFetch,forecastFetch])
      .then(async(response)=>
      {
       const weatherResponse= await response[0].json();
       const forecastResponse= await response[1].json();
       setCurrentWeather({city:data.label, ...weatherResponse});
       setforecastWeather({city:data.label,...forecastResponse});

      })
      .catch((err)=>console.log(err));
  }
  console.log(currentWeather);
  console.log(forecastWeather);

  return (
    <div className="container">
     
    <Search onSearchChange={handleOnSearchChange}/>
   {currentWeather && <CurrentWeather info={currentWeather}/>} 
    </div>
  );
}

export default App;
 
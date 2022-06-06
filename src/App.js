import React, { useState, useEffect } from 'react';
import WeatherContent from './components/WeatherContent';
import axios from 'axios';
import './App.css';

function App() {

  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=12.97&lon=77.59&exclude=current,hourly,minutely,alerts&appid=b3702f63541b50c5433b4618acb98c60&units=metric")
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((e) => console.log(e));
  }, [])


  return (
    <div className='app-container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <WeatherContent weatherData={weatherData} />
    </div>
  )
}

export default App;
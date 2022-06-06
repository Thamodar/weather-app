import React from 'react';
import DayDetail from './DayDetail';

const WeatherList = ({ weatherData = {} }) => {

    return (
        <div className="wl-container flexbox">
            {
                Object.keys(weatherData).length &&
                weatherData.map((weather, index) => (index > 0) ? <DayDetail key={index} weather={weather} styleClass='fontsize-1' /> : null)
            }
        </div>
    )
}

export default WeatherList;
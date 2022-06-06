import React, { useEffect, useState } from 'react';
import WeatherDetails from './WeatherDetails';
import WeatherList from './WeatherList';

const getCustomDay = (index) => {
    const weekDays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    let date = new Date();
    let day = weekDays[(date.getDay() + index) % 7];
    return day;

}

const getCustomIcon = ([icon]) => icon.main.toLowerCase();

function getCustomdegree({ min, max }) {
    return {
        min: Math.floor(min),
        max: Math.floor(max)
    };
}

const setCustomDataFunc = ({ daily = {} }) => {

    let customdata = [];
    if (Object.keys(daily).length) {
        customdata = daily.reduce((acc, wt, index) => {
            let { temp, weather } = wt;
            let data = {
                day: getCustomDay(index),
                icon: getCustomIcon(weather),
                degRange: getCustomdegree(temp)
            }
            acc.push(data);
            return acc;
        }, [])
    }

    return customdata;
}

const WeatherContent = ({ weatherData = {} }) => {
    const [customData, setCustomData] = useState([]);

    useEffect(() => {
        setCustomData(setCustomDataFunc(weatherData));
    }, [weatherData]);

    return (<div className='weather-app'>
        {
            Object.keys(customData).length &&
            <>
                <WeatherDetails currentData={customData[0]} />
                <WeatherList weatherData={customData} />
            </>
        }
    </div>
    )
}

export default WeatherContent;
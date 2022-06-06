import React from 'react';
import DayDetail from './DayDetail'
import Greetings from './Greetings';

const WeatherDetails = ({ currentData }) => {

    return (
        <div className='wd-container flexbox'>
            <DayDetail weather={currentData} styleClass='fontsize-2' />
            <Greetings />
        </div>
    )
}

export default WeatherDetails;
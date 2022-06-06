import React from 'react';

const DayDetail = ({ weather = {}, styleClass }) => {
    const { day, icon, degRange: { min, max } } = weather;
    return (

        <div className={`dd-container flexbox flex-column flex-align-center flex-justify-center ${styleClass}`}>
            {
                Object.keys(weather).length &&
                <>
                    <h1>
                        {day}
                    </h1>
                    <div className={icon} style={{ borderRadius: '8px' }}>
                    </div>
                    <h1>
                        {min}&#176; | {max}&#176;
                    </h1>
                </>
            }
        </div>
    )
}

export default DayDetail;
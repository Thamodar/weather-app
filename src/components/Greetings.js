import React, { useState, useEffect } from 'react';

const Greetings = () => {

    const [greetMessage, setGreetMessage] = useState('');

    useEffect(() => {
        let date = new Date();
        let time = date.getHours();
        let message = 'Good ';
        if (time < 12)
            message += 'Morning';
        else if (time < 15)
            message += 'AfterNoon';
        else
            message += 'Evening';

        setGreetMessage(message);
    }, [])
    return (
        <div className='dd-greet-container'>
            <header style={{ position: 'absolute', left: '25px', fontSize: '2rem', fontWeight: 'bold', marginTop: '40px' }}>
                {greetMessage}
                <h1>
                    Bangalore
                </h1>
            </header>
        </div>
    )
}

export default Greetings;
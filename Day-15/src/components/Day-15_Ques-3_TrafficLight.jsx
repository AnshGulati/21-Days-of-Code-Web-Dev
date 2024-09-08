import React, { useState } from 'react';

const TrafficLight = () => {

    const [color, setColor] = useState('red');

    const handleColor = () => {
        if (color == 'red') {
            setColor('green');

        }

        else if (color == 'green') {
            setColor('yellow');
        }

        else {
            setColor('red');
        }
    };

    return (
        <>
            <div className="LightBox">
                <div className={`light red ${color === 'red' ? 'active' : ''}`}></div>
                <div className={`light green ${color === 'green' ? 'active' : ''}`}></div>
                <div className={`light yellow ${color === 'yellow' ? 'active' : ''}`}></div>
            </div>

            <button onClick={handleColor}>Toggle Light!</button>
        </>
    );
};

export default TrafficLight;
import React, { useState } from 'react';

const ButtonClicker = () => {
    const [btn, setBtnActive] = useState(false);

    return (
        <div>
            <button onClick={() => setBtnActive(!btn)}>
                {btn ? "Clicked!" : "Click Me"}
            </button>
        </div>
    );
};

export default ButtonClicker;
import React, { useState, useEffect } from 'react';


function randomColor() {
    const COLOR_LIST = ['red', 'green', 'yellow'];
    const randomIndex = Math.trunc(Math.random() * 3);
    return COLOR_LIST[randomIndex];
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');

    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor();
            setColor(newColor);
        }, 1000);

        return () => {
            clearInterval(colorInterval);
        }
    }, []);

    return color;
}

export default useMagicColor;
import React, { useState } from 'react';

const HOCCompPractice = (WrapperComponent) => {

    const WithCounterPractice = () => {
        const [counter, setCounter] = useState(0);

        const increaseCounter = () => {
            setCounter(counter + 1);
        }

        return <WrapperComponent counter={counter} increaseCounter={increaseCounter}></WrapperComponent>
    }

    return WithCounterPractice;
    
}

export default HOCCompPractice;
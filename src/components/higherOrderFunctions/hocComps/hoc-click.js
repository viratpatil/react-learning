import React, { useState } from 'react'
import HOCCompPractice from '../higher-order-comp';


const HOCClick = ({counter, increaseCounter}) => {
    return <div>
        <h1>Clicked TIme {counter}</h1>
        <button onClick={increaseCounter}>Click ME</button>
    </div>
}

export default HOCCompPractice(HOCClick);
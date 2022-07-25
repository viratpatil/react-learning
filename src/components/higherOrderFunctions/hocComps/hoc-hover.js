import React, { useState } from 'react'
import HOCCompPractice from '../higher-order-comp';


const HOCHover = ({counter, increaseCounter}) => {
       
    return <div>
        <h1>HOver TIme {counter}</h1>
        <button onClick={increaseCounter}>Hover ME</button>
    </div>
}

export default HOCCompPractice(HOCHover);
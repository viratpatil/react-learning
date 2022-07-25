import React, { useCallback, useEffect, useState } from 'react';
import HookChild from './hookChild';

const HookParent = () => {
    const [count, setCounter] = useState(0);
    const myFunc = useCallback(() => {
        console.log("Function in parent");
    },[count]);

    const changeState = () => {
            setCounter(count + 1);
    }

    return <div>
        <HookChild myFunc={myFunc}></HookChild>
        <button onClick={changeState}>click me</button>
        <h1>Counter {count}</h1>
    </div>

}

export default HookParent;
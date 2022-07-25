import React, { useState, useCallback, useMemo, useReducer } from 'react';
import HookContext from './hookContext';
import HookParent from './hookParent';

const reducerFn = (state, action) => {
    switch(action.type) {
        case 'INC': return {...state, count: state.count + 1}
        case 'default': return state;
    }
}

export const HooksComp = () => {
    
    let [counter, setCounter] = useState(0);
    let [state, disptach] = useReducer(reducerFn, {count:10, message: 'hi'});
    let reduceArray = [1,2,3,4];

    reduceArray.slice(0,2);
    // console.log(reduceArray);
    // reduceArray.reduce(()=>{

    // })
    const onClick = () => {
        // setCounter(counter + 1);
        disptach({type: 'INC'});
    }

    const mulitplierValue = (num) => {
        return num * 2;
    }

    return <div>
            <h1>{counter}</h1>
            <h1>{state.count}</h1>
            <button onClick={onClick}>Click ME</button>
            <button onClick={() => {mulitplierValue(5)}}>Multiply Value</button>
            <HookContext></HookContext>
    </div>
}
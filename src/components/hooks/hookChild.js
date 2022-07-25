import React, { useEffect, useContext } from 'react';
import { TestContext } from './hookContext';



const HookChild = ({myFunc}) => {
    
    const {address} = useContext(TestContext);

    useEffect(() => {
        console.log('my function new instace');

    }, [myFunc]);

    return <div> <h1> HookChild   {address}</h1></div>

}

export default HookChild;
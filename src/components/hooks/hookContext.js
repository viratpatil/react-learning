import React, {createContext, useState} from 'react';
import HookParent from './hookParent';

export const TestContext = createContext(null);
const HookContext = () => {
    const [name, setName] = useState('Virat');
    const [address, setAddress] = useState('Virat Address');

    return <TestContext.Provider value={{name, address}}>
            <HookParent></HookParent>
    </TestContext.Provider>
}

export default HookContext;
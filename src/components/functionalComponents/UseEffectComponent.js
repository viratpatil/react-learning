import React, { useEffect, useState, useRef } from 'react';

const UseEffectComponent = () => {
    const[resourceType, setResourceType] = useState("posts");

    const test = useRef();

    useEffect(() => {
        console.log(test.current.value);
    }, [resourceType]);
    
    return <div>
            <input ref={test}></input>
            <h1>My Functional Component</h1>
            <button onClick={() => {
                setResourceType('posts')
            }}>Posts</button>
            <button onClick={() => {
                setResourceType('users')
            }}>Users</button>
            <button onClick={() => {
                setResourceType('comments')
            }}>Comments</button>
            <h1>{resourceType}</h1>
        </div>
}

export default UseEffectComponent;
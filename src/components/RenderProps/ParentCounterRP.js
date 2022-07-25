import React, { useState } from "react";

const ParentCounterRP = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
 
    return <>
    {props.render({count, increment})}
    </>
}

export default ParentCounterRP;
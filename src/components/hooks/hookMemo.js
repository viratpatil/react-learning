import React, { useEffect, useMemo, useState } from "react";
import { generatorFunction } from "../../utils/utils";


const HookMemo = (props) => {
    const [todos, setTodos] = useState([]);
    const [toggle, setToggle] = useState(false);

    const generatorObject = generatorFunction(); // Line 3
    console.log(generatorObject.next().value); // Line 4
    //console.log(generatorObject.next().value); // Line 5
    //console.log(generatorObject.next().value); // Line 6
 
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1").then( res => res.json()).then(result => {
            setTodos(result);
        });
    }, []);

    const parseData = (data) => {
        console.log(" Do Some Logic ");

        return " I am here"; 
    };

    const memoised = useMemo(() => parseData(todos), [todos]);

    const toggleButton = () => {
        setToggle(!toggle);
    }

    return <div>
        <button onClick={toggleButton}> Toggle Me</button> <h1>
        {
            memoised
        }
        </h1> <h2>Testing Toggle {String(toggle)}</h2>
    </div>
}

export default HookMemo;
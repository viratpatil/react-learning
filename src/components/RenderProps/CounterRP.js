import React from  "react";
import ParentCounterRP from "./ParentCounterRP";

const CounterRP = () => {
    // console.log(props);
    // const {count, increment} = props;
  return <ParentCounterRP render={({count, increment}) => {
    return  <><h1>Counter {count}</h1>
    <button onClick={increment}> Inc Counter</button></>
  }}>

  </ParentCounterRP>
  
}

export default CounterRP;
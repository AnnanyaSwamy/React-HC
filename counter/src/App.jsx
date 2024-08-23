import React from 'react'
import { useState } from 'react'

export default function App() {
  let [counter, setCounter]=useState(0);

  const addValue=()=>{
    counter=counter+1;
    setCounter(counter);
  }
  const subValue=()=>{
    if(counter>0)counter-=1;
    setCounter(counter);
  }

  return (
    <>
    <h1>Counter App</h1>
    <div>
    <button onClick={addValue}>Increase Value</button>
    <button onClick={subValue}>Decrease Value</button>
    </div>

    <p>Current value: {counter}</p>
    </>
  )
}


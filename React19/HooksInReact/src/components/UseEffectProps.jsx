import React from 'react'
import { useEffect } from 'react';

function UseEffectProps({counter, data}) {
    const getCounter=()=>{
        console.log("call only");
    }
    const getData=()=>{
        console.log("data calling ")
    }
    useEffect(()=>{
            getCounter();
    },[counter]);
    useEffect(()=>{
        getData();
    },[data]);


  return (
    <div>
        <h1>{counter}</h1>
        <h1>{data}</h1>
      
    </div>
  )
}

export default UseEffectProps

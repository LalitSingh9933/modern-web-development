import React from 'react'
import { useState, useEffect } from 'react';
import UseEffectProps from './UseEffectProps';


function UserEffectsecond() {
    const [counter ,setCounter]= useState(0);
    const [data, setData]= useState(0);

    useEffect(()=>{
//   callOnce();//This useEffect help to call this function only one time ... that means controlling it
counterFunction();
    },[counter]);
    function callOnce(){
        console.log("callOnce function called");
    }
    function counterFunction(){
         console.log("CounterFunction: ",counter);
    }
    
  
  return (
    <div>
        <h1>useEffect Hooks </h1>
<button onClick={()=>setCounter(counter+1)}>Counter{counter}</button>
<button onClick={()=>setData(data+1)}>Data{data}</button>
<UseEffectProps counter={counter} data={data}/>
      
    </div>
  )
}

export default UserEffectsecond

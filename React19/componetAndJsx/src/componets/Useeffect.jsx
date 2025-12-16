import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [ count, setCount]=useState(0);

    // First type of useEffect
    //  useEffect(()=>{
    //     console.log("Hello inside from useEffect");
    //  },[]);
     //second type of useEffect
     useEffect(()=>{
        console.log("Second Type of  useEffect")
     },[count])
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>{
        setCount(count+1);
    }}>Click Me </button>
    </div>
  )
}

export default Useeffect

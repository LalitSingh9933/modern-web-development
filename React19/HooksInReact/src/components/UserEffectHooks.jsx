import React, { useState } from 'react'
import { useEffect } from 'react'
function UserEffectHooks() {
  const [count, setCount]=useState(0);
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

export default UserEffectHooks

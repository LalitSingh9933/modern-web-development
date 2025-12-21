import React from 'react'
import {useRef} from "react"

function ForwordRefExample() {
    const inputRef =useRef(null)

    const updateInput =()=>{
        inputRef.current.value=1000;
        inputRef.current.focus();
    }

  return (
    <div>
      <h1>Forward Ref</h1>
      <input type='text' ref={inputRef}/>
      <button onClick={updateInput}>Update Input field</button>
    </div>
  )
}

export default ForwordRefExample

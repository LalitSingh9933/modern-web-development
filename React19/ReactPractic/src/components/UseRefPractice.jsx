import React from 'react'
import {useRef} from 'react'

function UseRefPractice() {
    const containerStyle ={
        padding:"10px",

    }
    const inputRef= useRef(null);

    const inputHandler=()=>{
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.color="red"
        inputRef.current.placeholder="enter password"
        // inputRef.current.value="123"
    }
  return (
    <div>
      
        <h1>useRef</h1>
        <input ref={inputRef} type='text' placeholder='Enter your name' style={containerStyle}/>
        <button onClick={inputHandler}>Focus on Input field</button>
      
    </div>
  )
}

export default UseRefPractice

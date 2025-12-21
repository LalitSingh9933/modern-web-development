import React from 'react'
import { useRef } from 'react';

function Uncontrolled() {
    //this is for userref ok
    const userRef=useRef();
    const passwordRef= useRef();
    const handleForm=(event)=>{
        event.preventDefault();
        const user=document.querySelector("#user").value;
        const password= document.querySelector("#password").value;
        console.log(user,password);
    }
    const handleFormRef=(event)=>{
        event.preventDefault();
        const user= userRef.current.value;
        const password=passwordRef.current.value;
        console.log("handleFormRef",user,password);
    }
  return (
    <div>
        <h1>Uncontrolled Component</h1>
        <form action="" method="post" onSubmit={handleForm}>
            <input type='text' id='user' placeholder='enter user name'/>
            <br/><br/>
            <input type='password' id='password' placeholder='enter user password'/>
            <br/><br/>
            <button>Submit</button>
        </form>
        <hr/>
          <h1>Uncontrolled Component using useRef</h1>
        <form action="" method="post" onSubmit={handleFormRef}>
            <input type='text' id='userRef'  ref={userRef} placeholder='enter user name'/>
            <br/><br/>
            <input type='password' id='passwordRef' ref={passwordRef} placeholder='enter user password'/>
            <br/><br/>
            <button>Submit with Ref</button>
        </form>

      
    </div>
  )
}

export default Uncontrolled

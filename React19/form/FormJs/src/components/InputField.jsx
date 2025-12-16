import React, { useState } from 'react'
function InputField() {
    const [name, setName]= useState("");
    const [password, setPassword]= useState("");
    const [email, setEmail]= useState("");
    const handClick=()=>{
        setName("");
        setEmail("");
        setPassword("");
    }
  return (
    <div className='border border-blue-400'>
        {/* <form method="get" action=""> */}
        <label htmlFor="myname">Name: </label>
        <input type='text' placeholder='Enter your name' value={name} required  name='myname' onChange={(event)=>{
            setName(event.target.value);
        }}/>
        <br/> <br/>
        <label htmlFor='password'>Password: </label>
        <input type='password' placeholder='"Enter password' value={password} required name='password' onChange={(event)=>{
            setPassword(event.target.value);}}/>
        <br/> <br/>
        <label htmlFor='email'>Email: </label>
        <input type='email' placeholder='Enter your Email' required value={email} onChange={(event)=>{
            setEmail(event.target.value);}}/>
            <button className='btnClear  bg-teal-200 p-4 m-5 ' onClick={handClick}>Clear</button>
    
      {/* </form> */}

      <h1>{name}</h1>
      <h1>{password}</h1>
      <h1>{email}</h1>
    
    </div>
  )
}

export default InputField

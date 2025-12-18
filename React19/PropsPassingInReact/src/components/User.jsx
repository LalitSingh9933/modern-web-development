import React from 'react'

function User({user}) {
  return (
    // here we recive the props from PassinDataincom
    <div className=' border-2 border-green-500 p-5 m-5 rounded-2xl'>
<h2>Name: <span className='text-blue-500'>{user.name}</span></h2>
<h2>Email:<span className='text-blue-500'>{user.email}</span></h2>
<h2>Age: <span className='text-blue-500'>{user.age}</span></h2>
      
    </div>
  )
}

export default User

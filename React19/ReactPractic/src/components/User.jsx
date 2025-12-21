import React from 'react'

function User({displayName,name}) {
    // const name ="lalit"
  return (
    <div>
      <button onClick={()=>displayName(name)}>Display Name</button>
    </div>
  )
}

export default User

import React from 'react'
import User from './User'

function PassFunInComAsProps() {
    const displayName=(name)=>{
        alert(name)
    }
  return (
    <div>
        <h1>Pass Function in component as Props</h1>
        <p> Why we need to pass function as this.props.
            Make  parent and child component.
            call function from parent  to child component .
        </p>
        <br/>
        <h1>Call Parent component function from child component</h1>
        <User displayName ={displayName} name="Aayushman"/>
        <User displayName={displayName} name="Pramod"/>
      
    </div>
  )
}

export default PassFunInComAsProps

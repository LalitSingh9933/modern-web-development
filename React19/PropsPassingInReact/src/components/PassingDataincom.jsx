import React from 'react'
import User from './User'

function PassingDataincom() {
    const userDetail = [
        {
            name: "lalit singh",
            age: 27,
            email: "lalitsingh@gmail.com",
            id: 1
        },
        {
            name: "pramod singh",
            age: 23,
            email: "pramodsingh@gmail.com",
            id: 2
        },
        {
            name: "Aayushman singh",
            age: 1,
            email: "aayoushmansingh@gmail.com",
            id: 3
        }
    ]
    return (
        <div>
            <h1>Reuse component in loop</h1>
            {/* make component.
        Apply map for loop in jsx
        Render Component in Loop
        Pass data in component inside loop
        Add Style */}
            {
                userDetail.map((user) => (
                    <div key={user.id}>
                        <User user={user}/>
                    </div>
                ))
            }

        </div>
    )
}

export default PassingDataincom

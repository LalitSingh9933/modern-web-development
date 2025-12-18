import React from 'react'

function UserData() {

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
            <h1>This example how array is looping through map function  fetching data</h1>
            <table border="1">
                <thead >
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>  
                </thead>
                <tbody>
                    {userDetail.map((user)=>(
                         <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                    </tr>
                    ))}
                   
                </tbody>
            </table>

        </div>
    )
}

export default UserData

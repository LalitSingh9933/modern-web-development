import React from 'react'

function Students({ students }) {
    return (
        <div>
            <h1>hello i am student </h1>

            <ul>
                <li>
                    <h4> Name: {students.name}</h4>
                </li>
                <li>
                    <h4>Age: {students.age}</h4>
                </li>
                <li>
                    <h4>Email: {students.email}</h4>
                </li>
            </ul>
        </div>
    )
}

export default Students

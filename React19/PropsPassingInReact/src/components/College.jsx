import React from 'react'
import Students from './Students'

function College({ college }) {
    return (
        <div className=' bg-amber-100 p-5 border-2 '>
            <h1>Name: {college.name}</h1>
            <ul>
                <li>
                    <h3>City:{college.city}</h3>
                </li>
                <li>
                    <h3>Website:{college.website}</h3>
                </li>
                <li>
                    <h3>Students </h3>
                    {college.student.map((student, index) => (
                        <div key={index}>
                            <Students students={student} />

                        </div>
                    )
                    )}
                </li>
            </ul>
        </div>
    )
}

export default College

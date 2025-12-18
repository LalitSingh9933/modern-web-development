import React from 'react'
import College from './College'

function PracticeNestedloop() {
    const collegeData =[
        {
            name:"Theme int college",
            city:"kathmandu",
            website:"www.themeint.com",
            student:[
                {
                    name:"lalit singh",
                    age:27,
                    email:"lalitsinghtest@gmail.com"
                }
            ]
        },
           {
            name:"kist int college",
            city:"kamal pokhari",
            website:"www.kist.com",
            student:[
                {
                    name:"pramod chand",
                    age:27,
                    email:"proamodtest@gmail.com"
                }
            ]
        },
           {
            name:"morgan int college",
            city:"Basundhara, kathmandu",
            website:"www.morgan.com",
            student:[
                {
                    name:"Aayushman singh",
                    age:27,
                    email:"Aayushmantest@gmail.com"
                }
            ]
        }

    ]
  return (
    <div>
        <h1>Nested looping with components</h1>
        { collegeData.map((college,index)=>(
            <div key={index}>
           <College college={college} />
            </div>
        )
        )}
      
    </div>
  )
}

export default PracticeNestedloop

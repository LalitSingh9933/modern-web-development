import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  const users = [
    {
      author: "lalit singh",
      title: "Flower garden",
      description: "In this image there is girl who wear hat who is taking flower",
      image: "https://images.pexels.com/photos/12548883/pexels-photo-12548883.jpeg"
    },
    {
      author: " suman chand",
      title: "Second Card",
      description: "Another description",
      image: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg"
    }
  ];

  return (
    <>
      <div className=' flex justify-center items-center gap-1  '>
        {users.map((item, index) => (
          < Card key={index}
            author={item.author}
            image={item.image}
            title={item.title}
            description={item.description} />
        )

        )}

      </div>

    </>
  )
}

export default App

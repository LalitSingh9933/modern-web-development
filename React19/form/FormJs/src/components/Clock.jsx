import React, { useEffect, useState } from 'react'

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [color, setColor] = useState("green")

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(interval) // cleanup
  }, [])

  const colorClasses = {
    red: "text-red-300",
    blue: "text-blue-300",
    green: "text-green-300",
    orange: "text-orange-300"
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Digital Clock in React JS</h1>

      <select
        onChange={(e) => setColor(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
      </select>

      <h1
        className={` ${colorClasses[color]} bg-black  p-5 rounded-2xl text-center text-2xl`}
      >
        {time}
      </h1>
    </div>
  )
}

export default Clock

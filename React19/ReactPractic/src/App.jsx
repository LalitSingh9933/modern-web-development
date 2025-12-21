import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseRefPractice from './components/UseRefPractice'
import Uncontrolled from './components/Uncontrolled'
import PassFunInComAsProps from './components/PassFunInComAsProps'
import UseFormState from './components/UseFormState'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
    {/* <UseRefPractice/> */}
    {/* <Uncontrolled/>
    <PassFunInComAsProps/> */}
    <UseFormState/>
    </>
  )
}

export default App

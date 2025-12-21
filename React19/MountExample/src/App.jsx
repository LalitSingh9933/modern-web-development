import { useState } from 'react'
import Mountring from './Components/Mountring'

function App() {
  const [count, setCount]=useState(0);
  const [data,setData] = useState(0);
  const [display, setDisplay]=useState(true);


  return (
    <>
    {
      display ? <Mountring count={count} data={data}></Mountring>:null
    }
    

     <button onClick={()=>setCount(count+1)}>Count</button>
     <button onClick={()=>setData(data+1)}>Data</button>
     <button onClick={()=>setDisplay(!display)}>Toggle</button>
    </>
  )
}

export default App

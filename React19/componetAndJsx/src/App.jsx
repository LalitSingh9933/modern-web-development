import { useState } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './componets/Home'
import About from './componets/About';

function App() {  const name = "lalit Singh";
  

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App

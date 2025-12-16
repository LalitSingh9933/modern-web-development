import { useState } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './componets/Home'
import About from './componets/About';
import Useeffect from './componets/Useeffect';

function App() {  const name = "lalit Singh";
  

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/Useeffect' element={<Useeffect/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App

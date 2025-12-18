import { useState } from 'react'
import Home from '../src/components/Home';
import About from '../src/components/About'
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {


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

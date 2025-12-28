import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/dashboard/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import AddBlog from './pages/dashboard/AddBlog'
import EditBlog from './pages/dashboard/EditBlog'
import SingleBlog from './pages/dashboard/SingleBlog'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/blog/add' element={<AddBlog/>}/>
        <Route path='/blog/edit' element={<EditBlog/>}/>
        <Route path='/blog/id' element={<SingleBlog/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

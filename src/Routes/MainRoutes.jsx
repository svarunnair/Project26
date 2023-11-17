import React from 'react'
import Signup from '../Pages/Signup'
import Signin from '../Pages/Signin'
import Home from '../Pages/Home'
import { Route, Routes } from 'react-router-dom'

function MainRoutes() {
  return (
    <div>
      <Routes>

        <Route path='/' element={<Signup/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/home' element={<Home/>}/>



      </Routes>
    </div>
  )
}

export default MainRoutes
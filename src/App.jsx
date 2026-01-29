import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import DevCommunity from './components/home/DevCommunity'
// New Imports
import SignUp from './pages/SignUp'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Currentproject' element={<Agence />} />
        <Route path='/Createprojects' element={<Projects />} />
        <Route path='/community' element={<DevCommunity />} />
        
        {/* New Routes */}
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
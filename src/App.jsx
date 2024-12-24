import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
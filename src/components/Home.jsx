import React from 'react'
import LandingPage from './LandingPage'
import AboutMe from './AboutMe'
import ServicesComponent from './Services'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      
      <LandingPage />
      <AboutMe />
      <ServicesComponent/>
    </div>
  )
}

export default Home
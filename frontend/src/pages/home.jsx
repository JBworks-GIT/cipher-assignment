import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import Features from '../components/Features.jsx'
import Pricing from '../components/Pricing.jsx'
import Navbar from '../components/Navbar.jsx'

function Home() {
  return (
    <>
        <Navbar />
        <HeroSection />
        <Features />
        <Pricing /> 
    </>
  )
}

export default Home
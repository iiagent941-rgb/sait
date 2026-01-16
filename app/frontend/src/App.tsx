import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Calculator from './components/Calculator'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Pricing />
        <Calculator />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App

import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  //portfolio whit routes and components
  const [toglw, setToglw] = useState(false)

  const handleClick = () => setToglw(!toglw)
  return (
    <div className='app'>
      <div className="bg"></div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      
    </div>
  )
}

export default App
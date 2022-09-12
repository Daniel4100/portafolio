import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  //portfolio whit routes and components
  return (
    <div className='app'>
      <div className="bg"></div>
      <h1>Hello World</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  )
}

export default App
import React from 'react'
import About from './components/About'
import Header from './components/Header'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => { 
  return (
    <main>
      <Header />
      {/* mx-auto : automatically centers 
          max-w-screen-d : sets max width of the element
          min-h-screen ensures it takes full height*/}
      <div className="mx-auto max-w-screen-md px-6 min-h-screen"> 
        <Routes> 
          <Route path="/about" element={<About />} /> 
          <Route path="/experience" element={<Experience />} /> 
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <Footer />  
      </div>
    </main> 
  )
}

export default App
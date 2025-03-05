import React from 'react'
import About from './components/About'
import Header from './components/Header'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import PageWrapper from './components/PageWrapper'
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
  const location = useLocation(); // Get current route

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageWrapper> <About /> </PageWrapper>} />
        <Route path="/about" element={
          <PageWrapper> <About /> </PageWrapper>} />
        <Route path="/experience" element={
          <PageWrapper> <Experience /> </PageWrapper >} />
        <Route path="/projects" element={
          <PageWrapper> <Projects /> </PageWrapper > } />
        <Route path="/contact" element={
          <PageWrapper> <Contact /> </PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => { 
  return (
    <main>
      <Header />
      {/* mx-auto : automatically centers 
          max-w-screen-d : sets max width of the element
          min-h-screen ensures it takes full height*/}
      <div className="mx-auto max-w-screen-md px-6 min-h-screen"> 
        <AnimatedRoutes />
        <Footer />  
      </div>
    </main> 
  )
}

export default App
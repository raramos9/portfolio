import React from 'react'
import About from './components/About'

const App = () => { 
  return (
    <main>
      {/* mx-auto : automatically centers 
          max-w-screen-d : sets max width of the element
          min-h-screen ensures it takes full height*/}
      <div className="mx-auto max-w-screen-md px-6 min-h-screen"> 
        <About />
      </div>
    </main> 
  )
}

export default App
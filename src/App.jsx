import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar.jsx' // ✅ Import corrigé
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Contact from './components/Contact/Contact.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        {/* Sidebar toujours visible */}
        <Sidebar />
        
        {/* Contenu principal */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
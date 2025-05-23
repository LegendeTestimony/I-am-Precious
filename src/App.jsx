import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar.components.jsx'
import HomePage from './pages/homePage.Pages.jsx'
import AboutPage from './pages/aboutPage.pages.jsx'

function App() {
  return (
    <Router>
      <div className="px-24 font-dmsans">
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add additional routes here */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<div>Projects Page</div>} />
            <Route path="/gallery" element={<div>Gallery Page</div>} />
            <Route path="/blog" element={<div>Blog Page</div>} />
            <Route path="/impact" element={<div>Impact Metrics Page</div>} />
            <Route path="/reports" element={<div>Reports Page</div>} />
            <Route path="/community" element={<div>Community Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App
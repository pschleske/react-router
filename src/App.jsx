import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from "./components/About"
import Home from "./components/Home"
import Contact from './components/Contact'
import User from './components/User'

function App() {

  const id = 5

  return (
    <BrowserRouter>
      <h1>App</h1>
      <nav>
        <Link style={{ color: "red" }} to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/about/contact">Contact</Link>
        <br />
        <Link to={`/user/${id}`}>User</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
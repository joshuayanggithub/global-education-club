import React, { useSyncExternalStore } from "react"
import '/logo.svg'
import '/src/styles/Navbar.css'

export const Navbar = () => {
  return (
    <nav id='Home' className='navbar'>
      <a href="#Home" className="logo-wrapper"><img src="/logo.svg" className="logo" alt="GEC logo" /></a>
      <div className="nav-links">
        <a href="#Tutoring" className="normal-links">Programs</a>
        <a href="#Overview" className="normal-links">Overview</a>
        <a href="#Mission" className="normal-links">Mission</a>
        <a href="mailto:qlsglobaleducation@gmail.com"><button className="nav-button">Contact</button></a>
      </div>
    </nav>
  )
}


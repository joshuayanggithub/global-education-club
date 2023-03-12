import React, { useSyncExternalStore } from "react"
import '/logo.svg'
import '/src/styles/Navbar.css'

export const Navbar = () => {
  return (
    <nav>
      <a href="#Home"><img src="/logo.svg" className="logo" alt="GEC logo" /></a>
      <div className="nav-links">
        <a href="#About" className="normal-links">About</a>
        <a href="#Mission" className="normal-links">Mission</a>
        <a><button className="nav-button">Contact</button></a>
      </div>
    </nav>
  )
}


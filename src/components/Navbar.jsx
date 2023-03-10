import React, { useSyncExternalStore } from "react"
import '/logo.svg'
import '/src/styles/Navbar.css'

export const Navbar = () => {
  return (
    <nav>
      <img src="/logo.svg" className="logo" alt="GEC logo" />
      <nav>
        <h1>About</h1>
        <h1>Mission</h1>
        <button className="nav-button">Sign Up</button>
      </nav>
    </nav>
  )
}


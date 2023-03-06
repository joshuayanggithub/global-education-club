import React, { useSyncExternalStore } from "react"
import '/logo.svg'

export const Navbar = () => {
  return (
    <nav>
      <img src="/logo.svg" className="logo" alt="GEC logo" />
      <div>
        <h1>About</h1>
        <h1>Mission</h1>
        <button>Sign Up</button>
      </div>
    </nav>
  )
}


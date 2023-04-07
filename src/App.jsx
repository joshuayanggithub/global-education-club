import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Mission } from "./components/Mission"
import { Navbar } from "./components/Navbar"
import { Overview } from "./components/Overview"
import { Reading } from "./components/Reading"
import { Tutoring } from "./components/Tutoring"
import '/src/styles/Global.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Tutoring />
      <Reading />
      <Mission />
      <Footer />
    </>
  )
}

export default App

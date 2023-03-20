import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Overview } from "./components/Overview"
import '/src/styles/Global.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Footer />
    </>
  )
}

export default App

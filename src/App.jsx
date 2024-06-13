import './App.css'
import About from './components/About'
import Cards from './components/Cards'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"



import LocomotiveScroll from "locomotive-scroll"

function App() {

  const locomotiveScroll = new LocomotiveScroll()

  return (
    <>
      <div className='w-full min-h-screen z-0 bg-zinc-900 text-white'>
        <Navbar/>
        <Landing/>
        <Marquee/>
        <About/>
        <Eyes/>
        <Featured/>
        <Cards/>
        <Footer/>
      </div>
    </>
  )
}

export default App

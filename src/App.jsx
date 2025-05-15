import "./index.css"
import Navbar from "./sections/Navbar/navbar"
import Home from "./sections/Home/Home"
import About from "./sections/About/About"
import Skill from "./sections/Skill/Skill"
import CertificateSection from "./sections/Certification/Certificate"
import Project from "./sections/Project/Project"
import Contact from "./sections/Contact/Contact"
import Footer from "./sections/fotter/fotter"

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <CertificateSection/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

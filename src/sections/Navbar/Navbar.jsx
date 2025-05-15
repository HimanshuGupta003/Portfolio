import "./navbar.css"
import logo from "../../assets/P logo.svg"
import { useState } from "react"

export default function Navbar() {
    
    let[isOpen, setIsOpen] = useState(false)

    return(
        <>
            <nav id="Home">
                <div className="logo-container">
                    <img src={logo} alt="Plogo" className="logo" />
                    <h1 className="portfolio">Portfolio</h1>
                </div>

                <div className="hamburger" onClick={()=> setIsOpen(!isOpen)}>
                    &#9776;
                </div>

                <ul className={`nav-link ${isOpen ? 'active' : ''}`}>
                    <li><a href="#Home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#Skills" onClick={() => setIsOpen(false)}>Skills</a></li>
                    <li><a href="#Certifications" onClick={() => setIsOpen(false)}>Certifications</a></li>
                    <li><a href="#Project" onClick={() => setIsOpen(false)}>Project</a></li>
                    <li><a href="#Contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            </nav>
        </>
    )
}
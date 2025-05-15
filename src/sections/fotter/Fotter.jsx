import "./fotter.css"
import logo from "../../assets/P logo.svg"

export default function Footer() {
    return(
        <>
            <br /> 
                <div className="logo-c">
                    <img src={logo} alt="Plogo" className="P" />
                    <h1 className="port">Portfolio</h1>
                </div>
                <br />
                <div className="underline-btw-proj"></div>
                <br />
                <div className="writing">
                    <p>© 2025 Himanshu Gupta. All rights reserved.</p>
                </div>
            <br />
        </>
    )
}
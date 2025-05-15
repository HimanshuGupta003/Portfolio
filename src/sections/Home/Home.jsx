import MyPic from "../../assets/MyPic.jpg"
import "./home.css"
import Typewriter from "./Typewriter";

export default function Home() {
    return(
        <>
            <div className="hero">
                <div className="image-section">
                    <img src={MyPic} alt="Himanshu Gupta" className="MyPic" />
                </div>

                <div className="writing-section">
                    <div className="name">
                        <h1 className="first_name">Himanshu</h1>
                        <h1 className="last_name">Gupta</h1>
                    </div>
                    <Typewriter />
                    <p className="hero-para">I design and develop modern, responsive websites and applications that blend clean code with great user experience. With a focus on performance, usability, and visual appeal, I turn ideas into impactful digital solutions. I enjoy creating interfaces that are both functional and visually engaging, ensuring they work seamlessly across all devices. <br /> <br /> <i>Let’s create something meaningful together—something that not only looks good but performs great too.</i></p>
                    <br />
                    <div className="button-group">
                        <a href="https://drive.google.com/file/d/1kzrS7_QB9i8YnQrJrpdnfqJBB-VdJWTi/view?usp=drive_link" target="_blank" className="btn resume">Resume</a>
                        <a href="#Project" className="btn project">Projects</a>
                    </div>

                    
                </div>
            </div>
            
        </>
    )
}
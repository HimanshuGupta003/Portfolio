import "./About.css";
import MyImg from "../../assets/about.jpg"

export default function About() {
    return (
        <>
            <section id="about">
                <h1 className="heading">About me</h1>
            <hr className="hr" /> 
            <br />
            <p className="intro"> <i> Get to know me better and discover what drives my passion for web development and design.</i> </p> 
            <br /> <br />
            <div className="about-main">
                <div className="writing-section">
                    <p className="name-intro">Hello! I'm Himanshu Gupta</p> <br />
                    <p className="my-intro">I'm a driven and detail-oriented front-end developer with a solid grounding in C, C++, HTML, CSS, JavaScript, and React. I specialize in building dynamic, responsive, and intuitive user interfaces that offer seamless experiences across devices. My passion lies in transforming creative ideas into sleek, efficient, and impactful web applications.While front-end development is my core strength, I’m currently expanding my skill set into backend technologies such as Node.js, Express, and databases, with the goal of becoming a versatile full-stack developer. This journey reflects my commitment to continuous growth and adaptability in the fast-paced tech landscape.I thrive in environments where innovation meets execution—where clean code, performance, and user experience go hand in hand. Every project I take on is an opportunity to learn something new, solve real problems, and push the boundaries of what the web can do.</p>

                    <div className="info-grid">
                        <div className="info-card">
                            <i className="fa fa-user"></i>
                            <div>
                                <h4>Personal Info</h4>
                                <p>Himanshu Gupta</p>
                            </div>
                        </div>  

                        <div className="info-card">
                            <i className="fa fa-award"></i>
                            <div>
                                <h4>Experience</h4>
                                <p>2+ Years Building Projects</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <i className="fa fa-folder-open"></i>
                            <div>
                                <h4>Projects</h4>
                                <p>3 Projects</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <i className="fa fa-graduation-cap"></i>
                            <div>
                            <h4>Education</h4>
                            <p>Computer Applications</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="img-section">
                    <img src={MyImg} alt="Picture" className="myimg"  />
                </div>
            </div>
            </section>
        </>
    )
}
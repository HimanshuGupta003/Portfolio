import "./project.css"
import Gym from "../../assets/Gym.png"
import wea1 from "../../assets/weather1.png"
import wea2 from "../../assets/weather2.png"
import Agri from "../../assets/SmartAgri.png"


export default function Project() {
    return(
        <>
            <div id="Project">
                <h1 className="header">Projects</h1>
            <div className="underline"></div>
            <div className="proj-sec1">
                <div className="img-sec1">
                    <br />
                    <img src={Gym} alt="Website image" className="gym-img" />
                </div>
                <div className="writing-sec1">
                    <h1 className="title1">DownTown</h1>
                    <h1 className="title2">Fitness</h1> <br />
                    <div className="proj-info1">
                        <div>A  gym website allowing users to explore programs and register for membership plans.</div>
                        <div className="proj-des1">
                            <div>&bull; Implemented JavaScript to capture and manage user details during sign-up.</div>
                            <div>&bull; Designed with a clean, intuitive UI to enhance user experience.</div>
                            <div> &bull; Tech Stack: HTML, CSS, JavaScript</div>
                        </div> <br />
                        <a href="https://regal-gumdrop-37e05b.netlify.app/" target="_blank" className="btn btn-live">View Live</a>
                        <a href="https://github.com/HimanshuGupta003/health-fitness-website" target="_blank" className="btn btn-code">Source Code</a>
                    </div>
                </div>
            </div>

            <br /><br />
            <div className="underline-btw-proj"></div>
            <br /><br />

            <div className="proj-sec1">
                <div className="img-sec2">
                    <br />
                    <img src={wea1} alt="Website image" className="wea-img1" />
                    <img src={wea2} alt="Website image" className="wea-img2" />
                </div>
                <div className="writing-sec2">
                    <h1 className="title3">Weather App</h1>
                    <div className="proj-info1 in">
                        <div>A real-time weather forecast application built using React and OpenWeather API.</div>
                        <div className="proj-des1">
                            <div>&bull; Fetches and displays live weather data based on user location or search input.</div>
                            <div>&bull; Designed for clarity and responsiveness across all devices.</div>
                            <div> &bull; Tech Stack: React, JavaScript, REST API, CSS</div>
                        </div> <br />
                        <a href="https://himanshugupta003.github.io/Weather-app/" target="_blank" className="btn  btn-live1 btn-live">View Live</a>
                        <a href="https://github.com/HimanshuGupta003/Weather-app" target="_blank" className="btn btn2 btn-code btn-code2">Source Code</a>
                    </div>
                </div>
            </div>

            <br /><br />
            <div className="underline-btw-proj"></div>
            <br /><br />

            <div className="proj-sec1">
                <div className="img-sec1">
                    <br />
                    <img src={Agri} alt="Website image" className="gym-img" />
                </div>
                <div className="writing-sec1">
                    <h1 className="title1 smart">SmartAgri</h1>
                    <h1 className="title2 farm">Farm</h1> <br />
                    <div className="proj-info1">
                        <div>A responsive website for promoting AI-powered farming tools and seasonal crop insights.</div>
                        <div className="proj-des1">
                            <div>&bull; Showcases smart farming products and educates users about optimal seasonal crops.</div>
                            <div>&bull; Integrated clean UI with responsive design using Bootstrap for enhanced layout.</div>
                            <div> &bull; Tech Stack: HTML, CSS, JavaScript, Bootstrap</div>
                        </div> <br />
                        <a href="https://eloquent-pie-297d62.netlify.app/" target="_blank" className="btn btn4 btn-live">View Live</a>
                        <a href="https://github.com/HimanshuGupta003/SmartAgri-Farm" target="_blank" className="btn btn5 btn-code">Source Code</a>
                    </div>
                </div>
            </div>

            <br /><br />
            </div>
        </>
    )
}
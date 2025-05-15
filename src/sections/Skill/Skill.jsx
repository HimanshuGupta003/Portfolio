import React from 'react';
import './Skill.css';
// Import Font Awesome in your main index.html or install via npm:
// npm install --save @fortawesome/fontawesome-free
// Then import in your main.jsx/index.jsx:
// import '@fortawesome/fontawesome-free/css/all.min.css';

export default function SkillsSection() {
    return (
        <div className="skills-container" id='Skills'>
        <h1 className="skills-title">My Skills</h1>
        <div className="underline"></div>
        
        <p className="skills-description">
            Here are the technologies and skills I've acquired throughout my professional journey.
        </p>

        {/* Frontend Development */}
        <div className="skill-card">
            <div className="skill-info">
            <div className="icon-container frontend-icon">
                <i className="fas fa-code"></i>
            </div>
            <span className="skill-name frontend-text">Frontend Development</span>
            <div className="skill-technologies">
                <div className="tech-item">
                <div className="tech-icon html-icon">
                    <i className="fab fa-html5"></i>
                </div>
                <span className="tech-name">HTML</span>
                </div>
                <div className="tech-item">
                <div className="tech-icon css-icon">
                    <i className="fab fa-css3-alt"></i>
                </div>
                <span className="tech-name">CSS</span>
                </div>
                <div className="tech-item">
                <div className="tech-icon js-icon">
                    <i className="fab fa-js"></i>
                </div>
                <span className="tech-name">Javascript</span>
                </div>
                <div className="tech-item">
                <div className="tech-icon react-icon">
                    <i className="fab fa-react"></i>
                </div>
                <span className="tech-name">React</span>
                </div>
            </div>
            </div>
        </div>

        {/* Backend Development */}
        <div className="skill-card backend-card">
            <div className="skill-info">
            <div className="icon-container backend-icon">
                <i className="fas fa-terminal"></i>
            </div>
            <span className="skill-name backend-text">Backend Development</span>
            <div className="learning-text">
                <span>Learning...</span>
            </div>
            </div>
        </div>

        {/* Programming Languages */}
        <div className="skill-card">
            <div className="skill-info">
            <div className="icon-container language-icon">
                <i className="fas fa-terminal"></i>
            </div>
            <span className="skill-name language-text">Programming Languages</span>
            <div className="skill-badges">
                <div className="skill-badge">
                <span>C</span>
                </div>
                <div className="skill-badge">
                <span>C++</span>
                </div>
                <div className="skill-badge">
                <span>Javascript</span>
                </div>
            </div>
            </div>
        </div>

        {/* Tools & Workflow */}
        <div className="skill-card">
            <div className="skill-info">
            <div className="icon-container tools-icon">
                <i className="fas fa-code"></i>
            </div>
            <span className="skill-name tools-text">Tools & Workflow</span>
            <div className="skill-badges">
                <div className="skill-badge">
                <span>GitHub</span>
                </div>
                <div className="skill-badge">
                <span>Figma</span>
                </div>
                <div className="skill-badge">
                <span>SQL</span>
                </div>
            </div>
            </div>
        </div>

        {/* Soft Skills */}
        <div className="skill-card">
            <div className="skill-info">
            <div className="icon-container soft-icon">
                <i className="fas fa-code"></i>
            </div>
            <span className="skill-name soft-text">Soft Skills</span>
            <div className="skill-badges">
                <div className="skill-badge">
                <span>Problem-Solving</span>
                </div>
                <div className="skill-badge">
                <span>Self-Motivation</span>
                </div>
                <div className="skill-badge">
                <span>Adaptability</span>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}
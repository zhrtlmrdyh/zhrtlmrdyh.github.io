import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faJira, faFigma } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "HTML5",
    "CSS",
    "CodeIgniter",
    "Laravel",
    "php",
    "JavaScript",
    "React",
    "Flutter",
    "Tailwind",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman",
    "Github",
    "Gitlab",
    "Linear",
    "Trello",
];

const labelsSecond = [
    "Test Planning",
    "Test Case Design",
    "Manual Testing",
    "Automated Testing",
    "Agile",
    "Scrum",
    "Test Excecution",
    "Katalon",
    "JMeter",
    "Functional Testing",
    "Selenium",
    "API Testing",
    "UI Testing"
];

const labelsThird = [
    "Canva",
    "Figma",
    "Adobe Photoshop"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="4x"/>
                    <h3>Software Engineer</h3>
                    <p>I have developed various web and mobile applications using modern technologies such as React and Flutter. I also have deep expertise in the SDLC process for web and mobile application development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faJira} size="3x"/>
                    <h3>Software Quality Assurance</h3>
                    <p>I have experience in ensuring software quality through meticulous testing using tools such as Selenium, Katalon, and JMeter. I excel in test execution for both black-box testing and functional testing, and can collaborate with development teams to meet quality standards and meet customer expectations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFigma} size="3x"/>
                    <h3>UI/UX Designer</h3>
                    <p>I specialize in creating intuitive and engaging user interfaces and experiences. My skills include wireframing, prototyping, and conducting user research to inform design decisions. I am proficient in tools like Figma, Adobe Photoshop, and Canva to ensure designs are visually appealing, functional, and user-friendly. Additionally, I have experience in brand identity design and managing social media content design.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
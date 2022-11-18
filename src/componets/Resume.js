import React, {useState} from "react";
import resume from '../assets/files/Resume.pdf'

const Resume = () => {
    
    const [front] = useState([
        {name: 'HTML'},
        {name: 'CSS'},
        {name: 'JavaScript'},
        {name: 'JQuery'},
        {name: 'React'},
    ])

    const [back] = useState([
        {name: 'APIs'},
        {name: 'Node'},
        {name: 'Express'},
        {name: 'MySQL, Sequelize'},
        {name: 'MongoDB, Mongoose'},
    ])

    
    return(
        <div className="resume-container">
            <div className='resume-holder'>
                <h2>Resume</h2>
                <a href={resume} download='resume.pdf'><h5>Download Detailed Resume</h5></a>
                <div className="front">
                    <h5>Front-End Skills</h5>
                    <ul>
                        {front.map((frontend) => (
                            <li key={frontend.name}>
                                {frontend.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="back">
                    <h5>Back-End Skills</h5>
                    <ul>
                        {back.map((backend) => (
                            <li key={backend.name}>
                                {backend.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume;
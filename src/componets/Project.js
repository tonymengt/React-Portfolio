import React, {useState} from "react";
import logo from "../assets/logo/GitHub.png"

const Project = () => {
    const [projects] = useState([
        {name: `Serf-Market`, deployed: 'https://serfs-market.herokuapp.com/', github: 'https://github.com/ShawnMaz/serfs-market'},
        {name: 'A-Night-In', deployed: 'https://raposamillar.github.io/A-Night-In/', github: 'https://github.com/raposamillar/A-Night-In'},
        {name: 'ChoreBuddy', deployed: 'https://still-hamlet-82669.herokuapp.com/', github: 'https://github.com/MrPhuzzles/ChoreBuddy'},
        {name: 'Weather-Dashboard', deployed: 'https://tonymengt.github.io/weather-dashboard/', github: 'https://github.com/tonymengt/weather-dashboard'},
        {name: 'Work-Scheduler', deployed: 'https://tonymengt.github.io/work-day-scheduler/', github: 'https://github.com/tonymengt/work-day-scheduler'},
        {name: 'Placeholder-2', deployed: 'https://github.com/tonymengt', github: 'https://github.com/tonymengt'},
    ]);


    return(
        <section className="projects-sec">
            <h2>My Recent <span>Works</span></h2>
            <div className="container">
                <div className="row d-flex flex-wrap">
                {projects.map((images) => (
                    <div className="pb-4 col-4 projects d-flex justify-content-center" key={images.name}>
                        <img src={require(`../assets/images/${images.name}.png`)}
                        alt={images.name}
                        className="sc"
                        key={images.name}
                        />
                        <div className="linkContainer">
                            <a href={images.deployed} className="deployed"> <p>{images.name}</p> </a>
                            <a href={images.github} className="git"> <img src={logo} alt="github-logo" /> </a>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <div className="spaceholder">   </div>
        </section>
    )

}

export default Project;
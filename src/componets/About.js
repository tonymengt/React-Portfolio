import React from "react";
import profileImage from '../assets/images/avataaars.png'

const About = () => {
    return (
        <section className="about">
            <h1>About Me</h1>
            <div className="about-container">
                <img id="about-me" src={profileImage} alt="avatar of Tony"/>
                <div className="bio">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, deserunt. Culpa fugiat explicabo laborum officia odio vero quam ducimus at, adipisci quod deserunt quasi officiis eveniet ex velit laboriosam pariatur.</p>
                </div>
            </div>
        </section>
    )
}

export default About;
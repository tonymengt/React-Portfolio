import React from "react";
import profileImage from '../assets/images/avataaars.png'

const About = () => {
    return (
        <section>
            <h2>About me</h2>
            <img id="about-me" src={profileImage} alt="avatar of Tony"/>
            <div class="bio">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, deserunt. Culpa fugiat explicabo laborum officia odio vero quam ducimus at, adipisci quod deserunt quasi officiis eveniet ex velit laboriosam pariatur.</p>
            </div>
        </section>
    )
}

export default About;
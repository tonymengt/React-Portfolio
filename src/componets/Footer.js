import React, { useState } from "react";


const Footer = () => {
    const [links] = useState([
        {name: 'GitHub'},
        {name: 'LinkedIn'},
        {name: 'Stack'},
    ])

    return (
        <footer>
            <ul className="footer-container">
                {links.map((social) => (
                <li className="col-2" key={social.name}>
                    <img id={social.name} src={require (`../assets/logo/${social.name}.png`)} alt={social.name}/>
                </li>
                ))}
            </ul>
        </footer>
    )

}

export default Footer;
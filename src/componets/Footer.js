import React, { useState } from "react";


const Footer = () => {
    const [links] = useState([
        {name: 'GitHub', src: 'https://github.com/tonymengt'},
        {name: 'LinkedIn', src: 'https://www.linkedin.com/in/tony-meng-9a3984a0/'},
        {name: 'Stack', src: 'https://stackoverflow.com/users/20533852/tmeng'},
    ])

    return (
        <footer>
            <ul className="footer-container">
                {links.map((social) => (
                <li className="social" key={social.name}>
                    <a href={social.src}>
                        <img 
                        id={social.name} 
                        src={require (`../assets/logo/${social.name}.png`)} 
                        alt={social.name}/>
                    </a>
                </li>
                ))}
            </ul>
        </footer>
    )

}

export default Footer;
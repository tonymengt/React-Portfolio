import React from "react";

const Nav = (props) => {
    const { tabs, selectedTab, setSelectedTab} = props

    return (
            <nav className="navContainer">
                <ul className="navBar">
                    {tabs.map((tab) => (
                        <li className={`${selectedTab.name === tab.name && 'active'}  navItem`} key={tab.name}>
                            <span onClick={() => {setSelectedTab(tab)}}>{tab.name}</span>
                        </li>
                    ))}
                    <li></li>
                </ul>
            </nav>
    )
}

export default Nav;
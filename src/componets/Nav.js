import React from "react";

const Nav = (props) => {
    const { tabs, selectedTab, setSelectedTab} = props

    return (
        <header>
            <nav>
                <ul>
                    {tabs.map((tab) => (
                        <li className={`${selectedTab.name === tab.name && 'active'}`} key={tab.name}>
                            <span onClick={() => {setSelectedTab(tab)}}>{tab.name}</span>
                        </li>
                    ))}
                    <li></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;
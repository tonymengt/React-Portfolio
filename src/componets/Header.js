import React from "react";
import Nav from "./Nav";

const Header = (props) => {
    const { tabs, selectedTab, setSelectedTab} = props

      return (
        <header>
            <Nav
                tabs={tabs}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            ></Nav>
        </header>
      )
}

export default Header;
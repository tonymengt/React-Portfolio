import { useState } from "react";
import "./App.css";
import About from "./componets/About";
import Nav from "./componets/Nav";
import Project from "./componets/Project";
import Contact from "./componets/Contact";
import Resume from "./componets/Resume";
import Footer from "./componets/Footer";

function App() {
  const [tabs] = useState([
    { name: "About" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="App">
      <header>
        <Nav
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Nav>
      </header>

      <main>
        {selectedTab.name === "About" ? (
          <About></About>
        ) : selectedTab.name === "Portfolio" ? (
          <Project></Project>
        ) : selectedTab.name === "Contact" ? (
          <Contact></Contact>
        ) : (
          <Resume></Resume>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

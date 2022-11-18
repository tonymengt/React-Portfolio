import { useState } from "react";
import "./App.css";
import About from "./componets/About";
import Header from "./componets/Header";
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
    <div className="app">
      <Header
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
      ></Header>

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
        <Footer></Footer>
      </main>

    </div>
  );
}

export default App;

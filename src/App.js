
import { useState } from 'react';
import './App.css';
import About from './componets/About';
import Nav from './componets/Nav';

function App() {
  const [tabs] = useState([
    {name: 'About'},
    {name: 'Portfolio'},
    {name: 'Contact'},
    {name: 'Resume'},
  ])
  const [selectedTab, setSelectedTab] = useState(tabs[0])


  return (
    <div className="App">
      <main>
        <About></About>
        <Nav 
          tabs = {tabs}
          selectedTab = {selectedTab}
          setSelectedTab = {setSelectedTab}
        ></Nav>
      </main>
    </div>
  );
}

export default App;

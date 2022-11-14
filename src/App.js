
import { useState } from 'react';
import './App.css';
import About from './componets/About';

function App() {
  const [contactSelected, setcontactSelected] = useState(false)
  const [selectedTab, seSelectedTab] = useState()


  return (
    <div className="App">
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;

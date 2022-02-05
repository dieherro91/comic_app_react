
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import HomePage from './pages/Home/HomePage.js'
import NavbarComponent from './components/NavbarComponent/NavbarComponent.js'
import BuscarComponent from './components/BuscarComponent/BuscarComponent.js'

function App() {
  return (
    <Router>
    <div className="App">
      
      <div className="App-sidebar">
        <NavbarComponent />
      </div>



      <div className="App-Content">
        
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/buscar" element={<BuscarComponent />} />
          </Routes>
        
      </div>


      
    </div >
    </Router>
  );
}

export default App;

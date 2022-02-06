
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import HomePage from './pages/Home/HomePage.js'
import NavbarComponent from './components/NavbarComponent/NavbarComponent.js'
import BuscarComponent from './components/BuscarComponent/BuscarComponent.js'
import FooterComponent from './components/FooterComponent/FooterComponent.js'
//import CardComponent from './components/CardComponent/CardComponent'


function App() {
  //const cosas =obtenerComics();
  //const asd=ObtenerComics()
  
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
      <div className="footers">
        
        <FooterComponent/>
      </div>


      
    </div >
    </Router>
  );
}

export default App;

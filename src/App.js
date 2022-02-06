
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import HomePage from './pages/Home/HomePage.js'
import NavbarComponent from './components/NavbarComponent/NavbarComponent.js'
import BuscarComponent from './components/BuscarComponent/BuscarComponent.js'
import FooterComponent from './components/FooterComponent/FooterComponent.js'
//import CardComponent from './components/CardComponent/CardComponent'
import AuthenticationMail from './pages/AuthenticationMail/AuthenticationMail.js'
//import {useFirebaseApp} from 'reactfire'
import FavoritesComics from "./pages/Favorites/FavoritesComics";

function App() {
  //const firebase=useFirebaseApp();
  //const cosas =obtenerComics();
  //const asd=ObtenerComics()
  
  //console.log(firebase)
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
            <Route path="/Authentication" element={<AuthenticationMail/>}/>
            <Route path="/FavoritesComics" element={<FavoritesComics/>}/>
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

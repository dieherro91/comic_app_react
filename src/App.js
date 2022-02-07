
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
import DetallesComics from "./pages/DetallesComics/DetallesComics";
import SearchByCharacter from "./pages/SearchByCharacter/SearchByCharacter";
import SearchByComic from "./pages/SearchByComic/SearchByComic";
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
            <Route path="/SearchByCharacter" element={<SearchByCharacter />} />
            <Route path="/SearchByComic" element={<SearchByComic />} />
            <Route path="/Authentication" element={<AuthenticationMail/>}/>
            <Route path="/FavoritesComics" element={<FavoritesComics/>}/>
            <Route path="/Details/:id" element={<DetallesComics/>}/>
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

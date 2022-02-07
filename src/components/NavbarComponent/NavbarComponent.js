
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './NavbarComponent.css'
import logoMarvel from '../../assets/images/marvel1.png'
import LoginButtoncomponent from '../LoginButtoncomponent/LoginButtoncomponent.js'
import LogoutButtonComponent from "../LogoutButtonComponent/LogoutButtonComponent";
import { auth } from "../../firebase/firebase.init";

function NavbarComponent() {
    const [isLog, setIsLog] = useState(false);
    
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (!user) {
                setIsLog(false)
            } else {
                setIsLog(true)
            }
        })
    }, [])
    return (
        <div className="flexing-sidebar">
            <Link to='/'>
                <img id="marvel-logo" src={logoMarvel} alt="logoMarvel" />
            </Link>
            <Link to="/Buscar">Buscar caracter</Link>
            <Link to="/FavoritesComics">Favoritos</Link>



            {
                isLog ? (<>
                    <LogoutButtonComponent />
                </>) : (<>
                    <LoginButtoncomponent />
                </>)
            }
        </div>
    )
}

export default NavbarComponent;
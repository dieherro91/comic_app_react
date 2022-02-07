
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logoMarvel from '../../assets/images/marvel1.png'
import LoginButtoncomponent from '../LoginButtoncomponent/LoginButtoncomponent.js'
import LogoutButtonComponent from "../LogoutButtonComponent/LogoutButtonComponent";
import { auth } from "../../firebase/firebase.init";
import './NavbarComponent.css'

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
            <Link className="nav-links" to="/SearchByCharacter">Characters</Link>
            <Link className="nav-links" to="/SearchByComic">Comics</Link>
            {
                isLog ? (<>
                    <Link className="nav-links" to="/FavoritesComics">Favorites</Link>
                    <LogoutButtonComponent />
                </>) : (<>
                    <LoginButtoncomponent />
                </>)
            }
        </div>
    )
}

export default NavbarComponent;
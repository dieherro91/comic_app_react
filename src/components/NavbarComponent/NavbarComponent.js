
import React from "react";
import { Link } from "react-router-dom";

import './NavbarComponent.css'
import logoMarvel from '../../assets/images/marvel1.png'
import LoginButtoncomponent from '../LoginButtoncomponent/LoginButtoncomponent.js'

function NavbarComponent() {
    return (
        <div className="flexing-sidebar">
            <Link to='/'>
                <img id="marvel-logo" src={logoMarvel} alt="logoMarvel" />
            </Link>
            <Link to="/Buscar">Buscar caracter</Link>
            <LoginButtoncomponent/>
        </div>
    )
}

export default NavbarComponent;
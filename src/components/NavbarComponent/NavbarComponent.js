
import React from "react";
import { Link } from "react-router-dom";

import './NavbarComponent.css'
import logoMarvel from '../../assets/images/marvel1.png'
import LoginButtoncomponent from '../LoginButtoncomponent/LoginButtoncomponent.js'
import LogoutButtonComponent from "../LogoutButtonComponent/LogoutButtonComponent";

function NavbarComponent() {
    return (
        <div className="flexing-sidebar">
            <Link to='/'>
                <img id="marvel-logo" src={logoMarvel} alt="logoMarvel" />
            </Link>
            <Link to="/Buscar">Buscar caracter</Link>
            <LogoutButtonComponent/>
            <LoginButtoncomponent/>
        </div>
    )
}

export default NavbarComponent;
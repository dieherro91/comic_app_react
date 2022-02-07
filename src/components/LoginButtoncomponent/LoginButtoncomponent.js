import React from "react";
import { useNavigate } from 'react-router-dom';

import './LoginButtoncomponent.css'

function LoginButtoncomponent() {
    const navigate=useNavigate();

    const handleLogin=()=>{
        navigate('Authentication');
    }
    return (
        <div >
            <button className="button-login" onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LoginButtoncomponent;
import React from "react";
import './LoginButtoncomponent.css'
import { useNavigate } from 'react-router-dom';

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
import React from "react";
import {signOut} from 'firebase/auth';

import './LogoutButtonComponent.css'
import { auth } from "../../firebase/firebase.init";
import { useNavigate } from "react-router-dom";
function LogoutButtonComponent() {

    const navigate=useNavigate();
    const handleSignOut=()=>{
        signOut(auth).then(()=>{
            navigate("/")
        }).catch((err)=>{
            alert(err.message)
        })
    };
    return (
        <div >
            
            <button className="button-logout" onClick={handleSignOut}>Logout</button>

        </div>
    )
}

export default LogoutButtonComponent;
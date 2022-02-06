import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';


import { auth } from "../../firebase/firebase.init";
import './AuthenticationMail.css'
import dino from '../../assets/images/pow-1601674.png'

function AuthenticationMail() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isRegister, setIsRegister] = useState(false);
    //const [user,setUser]=useState({});
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                //conditional to know if user is authenticate
                console.log("user autenticado")
            } else {
                console.log("User no autenticado")
            }
        })
    }, [])
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password).then(() => {
            toast.success("Sign Complete");
            navigate('/')
        }).catch((err) => {
            //toast("Error Login");
            alert(err.message)

        })
    }

    const handleRegister=()=>{
        createUserWithEmailAndPassword(auth,email,password).then(()=>{
            toast.success("User Register Complete please Log In");
            //window.location.reload();
            setIsRegister(false);
            

        }).catch((err)=>{
            //toast("Error in the register");
            alert(err.message)
        })
    }

    const handleGoogleSignIn = () => {

        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider).then(result => {
            //setUser(result.user)
            console.log(result.user)

        }).catch((error) => {
            console.log(error.message)
        });

    }

    
    return (
        <div className='auth-container'>

            {isRegister ? (<>
                <h1>Register Account</h1>
            </>) : (<>
                <h1>Sign In</h1>
            </>)}



            <div className='auth-card'>

                <div className='section-auths'>
                    <label htmlFor='email'>E-mail</label>
                    <input className='input-auth' type="email" id="email" onChange={handleEmailChange} value={email} placeholder="enter e-mail"></input>
                    <label htmlFor='password'>Password</label>
                    <input className='input-auth' type="password" id="password" onChange={handlePasswordChange} value={password} placeholder="enter password"></input>

                    {isRegister ? (<>
                        <button className='button-auths' onClick={handleRegister}>Register</button>
                    </>) : (<>
                        <button className='button-auths' onClick={handleSignIn}>Log In</button>
                    </>)}


                    <hr />
                </div>

                <div className='section-auths'>
                    <img id="dino" src={dino} alt='dino' />
                    <hr />
                </div>

                {isRegister ? (<>
                    <label>I have an account</label>
                    <div id='bottom-auth' className='section-auths'>

                        
                        <button className='button-auths' onClick={() => setIsRegister(false)}>Sign in</button>

                    </div>
                </>) : (<>
                    <label>Sign up with</label>
                    <div id='bottom-auth' className='section-auths'>

                        <button className='button-auths' onClick={handleGoogleSignIn}>Google</button>
                        <button className='button-auths' onClick={() => setIsRegister(true)}>e-mail</button>

                    </div>
                </>)}





            </div>
            <ToastContainer position="top-center"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
            />
        </div>
    )
}
export default AuthenticationMail;
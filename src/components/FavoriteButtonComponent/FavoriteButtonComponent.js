import { push, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { auth, db } from "../../firebase/firebase.init";
import './FavoriteButtonComponent.css'

function FavoriteButtonComponent({ Array }) {
    const [isAuths, setIsAuths] = useState(false);
    const [isCliked, setIsCliked] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setIsAuths(true)
            } else {
                setIsAuths(false)
            }
        })
    }, []);

    const handleCLick = () => {

        push(ref(db, `favorites/${auth.currentUser.uid}`), {
            id: `${Array[0]}`,
            title: `${Array[1]}`,
            imagen: `${Array[2]}`
        }).then((res) => {
            setIsCliked(true);
            toast.success("Comic save in favorites  ")
        }).catch((err) => {
            console.log(err)
            setIsCliked(false)
            toast.error("Comic not save!")
        })
    };

    return (<>
        <div>
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
            {isAuths ? (<>
                {!isCliked ? (<>
                    <button className="buttonFavoritet" onClick={handleCLick}>Save Favorite</button>
                </>) : (<>
                </>)}

            </>) : (<>

            </>)}

        </div>
    </>)
}
export default FavoriteButtonComponent;
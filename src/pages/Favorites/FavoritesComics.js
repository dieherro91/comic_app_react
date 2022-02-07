import React, { useEffect, useState } from 'react';
import './FavoritesComics.css'
//import {uid} from 'uid';
import { uid } from 'uid'
import { set, ref, onValue } from 'firebase/database';
import { auth, db } from '../../firebase/firebase.init';
import { useNavigate } from 'react-router-dom';


function FavoritesComics() {
    
    const navigate = useNavigate();

    var cosas={};

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {

                onValue(ref(db, `favorites/${auth.currentUser.uid}`), (snapshot) => {
                    const data = snapshot.val();
                    if (data !== null) {
                        cosas=data;
                        console.log("las cosas son: ", cosas)
                    }
                })

                
            } else {
                navigate("/")
            }
            // setTodos(cosas);
            // console.log("estos son todos: ",todos)
        })
    }, [])
    
    const objectos={'212312':'htttpasdasd','212312w':'htttpasdeasd','2123qe12':'htwettpasdasd'}

    const writeFavoritesDB = () => {
        
        const uidd =uid();
        set(ref(db, `favorites/${auth.currentUser.uid}`), objectos)
        
    }
    
    return (<>
        <div>

            <button onClick={writeFavoritesDB}>subir</button>

        </div>
    </>)
}
export default FavoritesComics;
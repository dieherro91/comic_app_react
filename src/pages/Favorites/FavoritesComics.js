import React, { useState } from 'react';
import './FavoritesComics.css'
//import {uid} from 'uid';
import {uid} from 'uid'
import { set, ref} from 'firebase/database';
import { auth, db } from '../../firebase/firebase.init';

function FavoritesComics() {
    const [favorite,setFavorite]=useState("");
    const writeFavoritesDB=()=>{
        const uidd =uid();
        set(ref(db,`/${auth.currentUser.uid}/`),{
            favorite:favorite,
            uid:uidd
        })
    } 
    return (<>
    
    </>)
}
export default FavoritesComics;
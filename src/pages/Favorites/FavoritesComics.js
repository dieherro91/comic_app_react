import React, { useEffect, useState } from 'react';
import './FavoritesComics.css'

import { ref, onValue } from 'firebase/database';
import { auth, db } from '../../firebase/firebase.init';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardComponent from '../../components/CardComponent/CardComponent';


function FavoritesComics() {
    const [listaFav,serListaFav]=useState([])
    const navigate = useNavigate();

    var cosas=[];

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {

                onValue(ref(db, `favorites/${auth.currentUser.uid}`), (snapshot) => {
                    const data = snapshot.val();
                    if (data !== null) {
                        cosas=[data];
                        console.log("las cosas son: ", cosas)
                    }
                })
                // for(let cos in cosas[0]){

                // }
                //
                var listaFavoritas=[]
                Object.keys(cosas[0]).map(function(keyName, keyIndex) {
                    listaFavoritas.push(cosas[0][keyName])
                    return 1;
                    // use keyName to get current key's name
                    // and a[keyName] to get its value
                    
                });
                serListaFav(listaFavoritas)
                  
                //console.log( "tipos",typeof )
                
            } else {
                //
                toast.warning("please log in")
                navigate("/")
            }
            // setTodos(cosas);
            // console.log("estos son todos: ",todos)
        })
    }, [])
    
    
    return (<>
        
        <div className="mainContainerFavorite">
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
            <div className="Favorite">
                <h2>Your favorites comics</h2>
                

            </div>

            <div className="ContainerContentFavorite">
                
            {listaFav.map((comic) => (
                            <CardComponent className="cards-search" key={comic.id} Objeto={comic} />
                        ))} 
                        
           



            </div>
        </div>
    </>)
}
export default FavoritesComics;
import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import ReactLoading from "react-loading";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { auth, db } from '../../firebase/firebase.init';
import CardComponent from '../../components/CardComponent/CardComponent';
import './FavoritesComics.css'

function FavoritesComics() {
    const [listaFav, serListaFav] = useState([])
    const navigate = useNavigate();
    var cosas = [];
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {

                onValue(ref(db, `favorites/${auth.currentUser.uid}`), (snapshot) => {
                    const data = snapshot.val();
                    if (data !== null) {
                        cosas = [data];
                    }
                });

                var listaFavoritas = []
                Object.keys(cosas[0]).map(function (keyName, keyIndex) {
                    listaFavoritas.push(cosas[0][keyName])
                    return 1;

                });
                serListaFav(listaFavoritas)

            } else {
                toast.warning("please log in")
                navigate("/")
            }
        })
    }, [])

    if (cosas === []) {
        return (
            <div>
                <div> cargando imagenes... </div>
                <ReactLoading type="spinningBubbles" color="#ffffff" height="500" width="500" />
            </div>
        )
    }

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
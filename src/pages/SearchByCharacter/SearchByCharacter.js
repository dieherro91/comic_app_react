import React, { useEffect, useState } from "react";
import axios from 'axios'
import ReactLoading from "react-loading";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CardComponent from "../../components/CardComponent/CardComponent";
import { buscarCharacter, buscarCharacterComics } from '../../services/api.js'
import kapow from '../../assets/images/boom-4680150_1280.png'
import './SearchByCharacter.css'

function SearchByCharacter() {
    const [dataComics, setDataComics] = useState('');
    const [inputSearch, setInputSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false)
    const [id,setId]=useState('');

    const secondquery= async ()=>{
        if(id !==''){
            await axios.request(buscarCharacterComics(id)).then(function (resp){
                setDataComics(resp.data.data.results);
                console.log(resp.data.data.results);
                setIsSearching(false)
            }).catch(function (error) {
                console.error(error);
            });
        };
    };
    useEffect(()=>{
        secondquery()
    },[id,dataComics])

    const handleSearchChange = (e) => {
        setInputSearch(e.target.value);
    };
    const handleSearch = async (e) => {
        e.preventDefault()
        setIsSearching(true)
        await axios.request(buscarCharacter(inputSearch)).then(function (response) {
            
            if(response.data.data.results.length===0){
                toast.error("Character not found ~(T w T)~ ")
            }else{
            setId(response.data.data.results[0].id);            
            //console.log(response.data.data.results[0].id)
            //console.log(response)
            console.log(id)
            }
            
        }).catch(function (error) {
            console.error(error);
        });
        
        
    }
    if (dataComics !== '') {
        var comicsSearch = []
        for (let i = 0; i < dataComics.length; i++) {

            if (dataComics[i].images.length !== 0) {
                comicsSearch.push({
                    'id': dataComics[i].id,
                    'title': dataComics[i].title,
                    'imagen': `${dataComics[i].images[0].path}/portrait_uncanny.${dataComics[i].images[0].extension}`,
                    'url': dataComics[i].urls[0].url

                });
            };


        };
    };
    console.log("asdasdasddddddddddddddddddddd")
    console.log(comicsSearch);
    return (<>
        <div className="mainContainerSearch">
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

            <div className="search">
                <h2>Search the latest comics of your favorite character</h2>
                <div>
                    <form onSubmit={handleSearch}>
                        <input className='input-search' type="text" onChange={handleSearchChange} value={inputSearch} placeholder="Search Comic Character" />
                        <button className="button-search" type="submit">search</button>
                    </form>

                </div>


            </div>

            <div className="ContainerContent">
                {dataComics === '' ? (<>
                    <div className="initial-page">


                        <h1>keep searching the best comics</h1>
                        <img id='kapow' src={kapow} alt="kaod" />

                    </div>
                </>) : (<>
                    {isSearching ? (<>
                        <div>
                            <div> cargando imagenes... </div>
                            <ReactLoading type="spinningBubbles" color="#ffffff" height="500" width="500" />
                        </div>

                    </>) : (<>


                        {comicsSearch.map((comic) => (
                            <CardComponent className="cards-search" key={comic.id} Objeto={comic} />
                        ))}

                    </>)}

                </>)}



            </div>
        </div>
    </>)
}
export default SearchByCharacter;
import React, { useEffect, useState } from "react";
import './SearchByComic.css'
import { buscarComicName } from '../../services/api.js'
import axios from 'axios'
import ReactLoading from "react-loading";
import kapow from '../../assets/images/kapow-1601675_1280.png'

import CardComponent from "../../components/CardComponent/CardComponent";

function SearchByComic() {
    const [dataComics, setDataComics] = useState('');
    const [inputSearch, setInputSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false)


    const handleSearchChange = (e) => {
        setInputSearch(e.target.value);
    };
    const handleSearch = async (e) => {
        e.preventDefault()
        setIsSearching(true)
        await axios.request(buscarComicName(inputSearch)).then(function (response) {
            //setDataOneComic(response.data.data.results);
            setDataComics(response.data.data.results)
            console.log(response.data.data.results)
            setIsSearching(false)
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

            <div className="search">
                <h2>Search the latest comics titles</h2>
                <div>
                    <form onSubmit={handleSearch}>
                        <input className='input-search' type="text" onChange={handleSearchChange} value={inputSearch} placeholder="Search Comic" />
                        <button className="button-search" type="submit">search</button>
                    </form>

                </div>


            </div>

            <div className="ContainerContent">
                {dataComics === '' ? (<>
                    <div className="initial-page">


                        <h1>keep searching the best comics</h1>
                        <img id='kapow' src={kapow} />

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
export default SearchByComic;
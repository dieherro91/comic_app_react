import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactLoading from "react-loading";

import FavoriteButtonComponent from "../../components/FavoriteButtonComponent/FavoriteButtonComponent";
import { SearchComicId, buscarComicsCharacterlist } from "../../services/api";
import './DetallesComics.css'

function DetallesComics() {
    const { id } = useParams()
    const [dataOneComic, setDataOneComic] = useState('');
    const [comicCharacters, setComicCharacters] = useState([]);

    useEffect(() => {
        if (dataOneComic === '') {
            const searchComic = async () => {
                await axios.request(SearchComicId(id)).then(function (response) {
                    setDataOneComic(response.data.data.results);
                }).catch(function (error) {
                    console.error(error);
                });
            };
            searchComic()

            const searchChractesComicId = async () => {
                await axios.request(buscarComicsCharacterlist(id)).then(function (response) {
                    setComicCharacters(response.data.data.results)
                }).catch(function (error) {
                    console.log(error)
                })
            };
            searchChractesComicId();
        }
    }, [dataOneComic, id]);

    if (dataOneComic === '') {
        return (<>
            <div>
                <div> cargando imagenes... </div>
                <ReactLoading type="spinningBubbles" color="#ffffff" height="200" width="200" />
            </div>
        </>)
    };

    const variants = dataOneComic[0].variants;

    const variantes = (variants) => {
        let arraylist = []
        for (let i = 0; i < variants.length; i++) {
            let splitter = `${dataOneComic[0].variants[i].resourceURI}`.split('/');
            let comicID = splitter[splitter.length - 1]
            arraylist.push({
                'id_comic': comicID,
                'name': `variant ${i + 1}: "${dataOneComic[0].variants[i].name}", comic ID: ${comicID}`
            })
        }
        return arraylist;
    };

    const listaVariants = variantes(variants);

    return (
        <>
            <div className="detail-container">
                <header id="title-detail">{dataOneComic[0].title}</header>

                <div className="detail-subcontainer">
                    <img className="image-unique" alt="unique" src={`${dataOneComic[0].images[0].path}/portrait_uncanny.${dataOneComic[0].images[0].extension}`}></img>
                    <div className="test-detail">
                        <h2 className="subtitles">characters</h2>
                        <div className="list-variants">

                            {(comicCharacters.length) > 0 ? (<>

                                {comicCharacters.map((comicCharacter) => (

                                    <h3 className="link-variants" key={comicCharacter.id}>{comicCharacter.name}</h3>

                                ))}

                            </>) : (<>
                                <h5 className="link-variants" >No characters available</h5>
                            </>)}
                        </div>
                        <h2 className="subtitles">variants</h2>
                        <div className="list-variants">

                            {(listaVariants.length) > 0 ? (<>

                                {listaVariants.map((variant) => (
                                    <a className="link-variants" key={variant.id_comic} href={`/Details/${variant.id_comic}`}>
                                        <h3 className="link-variants" >{variant.name}</h3>
                                    </a>
                                ))}

                            </>) : (<>
                                <h5 className="link-variants" >No variants available</h5>

                            </>)}
                        </div>

                        <div className="footer-detail">
                            <a className="link-variants-oficial" href={dataOneComic[0].urls[0].url}>
                                <h4 className="link-variants-oficial">
                                    ver en sitio oficial
                                </h4>
                            </a>
                            <FavoriteButtonComponent Array={[id, dataOneComic[0].title, `${dataOneComic[0].images[0].path}/portrait_uncanny.${dataOneComic[0].images[0].extension}`]} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DetallesComics;
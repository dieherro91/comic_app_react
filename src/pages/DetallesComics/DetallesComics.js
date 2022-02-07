import React, { useEffect, useState } from "react";
import './DetallesComics.css'
import { Link, useParams } from "react-router-dom";
import { SearchComicId } from "../../services/api";
import axios from "axios";
import ReactLoading from "react-loading";

function DetallesComics() {
    const { id } = useParams()

    const [dataOneComic, setDataOneComic] = useState('');


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
        }

    }, [dataOneComic, id])

    if (dataOneComic === '') {
        return (<>
            <div>
                <div> cargando imagenes... </div>
                <ReactLoading type="spinningBubbles" color="#ffffff" height="200" width="200" />
            </div>
        </>)
    }
    // const stringofimage=
    console.log(dataOneComic)

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
        return arraylist
    }

    const listaVariants = variantes(variants);
    console.log("adasd")
    console.log(listaVariants)
    return (
        <>
            <div className="detail-container">
                <header id="title-detail">{dataOneComic[0].title}</header>

                <div className="detail-subcontainer">
                    <img className="image-unique" alt="unique" src={`${dataOneComic[0].images[0].path}/portrait_uncanny.${dataOneComic[0].images[0].extension}`}></img>
                    <div className="test-detail">
                        <div>
                            <h3 className="titulos">issue Number</h3>
                            <h2 className="titulos">{`#: ${dataOneComic[0].issueNumber}`}</h2>
                        </div>
                        <h2>variants</h2>
                        <div className="list-variants">

                            {(listaVariants.length) > 0 ? (<>

                                {listaVariants.map((variant) => (

                                    <a className="link-variants" key={variant.id_comic} href={`/Details/${variant.id_comic}`}>
                                        <h3 className="link-variants" >{variant.name}</h3>
                                    </a>

                                ))}

                            </>) : (<>
                                <h5 className="link-variants" >No variants availeable</h5>

                            </>)}


                        </div>

                        <div className="footer-detail">
                            <a className="link-variants-oficial" href={dataOneComic[0].urls[0].url}>
                                <h4 className="link-variants-oficial">
                                    ver en sitio oficial
                                </h4>
                            </a>
                            <button>Favorites</button>
                            
                        </div>


                    </div>
                </div>


            </div>

        </>
    )
}
export default DetallesComics;
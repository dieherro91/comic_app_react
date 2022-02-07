import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import CardComponent from "../../components/CardComponent/CardComponent";
import { ObtenerComics } from '../../services/api.js'
import './HomePage.css'


function HomePage() {

    const logos = useMemo(() => [], []);
    const [comicData, setComicData] = useState("");
    const [datasCard, setDatasCard] = useState(false);
    const handleDragStart = (e) => e.preventDefault();
    useEffect(() => {

        if (comicData === "") {

            const search = async () => {
                await axios.request(ObtenerComics()).then(function (response) {
                    setComicData(response.data.data.results);
                }).catch(function (error) {
                    console.error(error);
                });

            };
            search()
        } else {
            if (logos.length === 0) {
                const comicsHome = [];
                setDatasCard(false);
                for (let i = 0; i < comicData.length; i++) {
                    if (comicData[i].images.length !== 0) {
                        comicsHome.push({
                            'id': comicData[i].id,
                            'title': comicData[i].title,
                            'imagen': `${comicData[i].images[0].path}/portrait_uncanny.${comicData[i].images[0].extension}`,
                            'url': comicData[i].urls[0].url
                        });
                    };
                    logos.push(<CardComponent
                        // className="images-slider" 
                        Objeto={comicsHome[i]}
                        onDragStart={handleDragStart}
                    />);

                };
                setDatasCard(true);
            }
        }
    }, [comicData, datasCard, logos]);

    if (comicData === "") {
        return (<>
            <div>
                <div> cargando imagenes... </div>
                <ReactLoading type="spinningBubbles" color="#ffffff" height="500" width="500" />
            </div>
        </>)
    }


    return (
        <div className="flexing-home">

            <h1 id="title-home">Lastest comics </h1>

            {
                datasCard === false ? (
                    <>
                        <div>
                            <div> cargando imagenes... </div>
                            <ReactLoading type="spinningBubbles" color="#ffffff" height="900" width="900" />
                        </div>
                    </>)
                    : (
                        <>
                            <AliceCarousel
                                items={logos}
                                autoPlayInterval={2000}
                                autoPlay={true}
                                disableButtonsControls={true}
                                stagePadding={{
                                    paddingLeft: 5,     // in pixels
                                    paddingRight: 0
                                }}
                                showSlideInfo={true}

                                responsive={{
                                    0: {
                                        items: 1
                                    },
                                    512: {
                                        items: 2
                                    },
                                    768: {
                                        items: 3
                                    },
                                    1024: {
                                        items: 4
                                    }
                                }}
                            />
                        </>)
            }

        </div>
    )
}

export default HomePage;


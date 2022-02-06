import React, { useEffect } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from "axios";

import { useState } from "react";

import './HomePage.css'
import logoMarvel from '../../assets/images/marvel1.png'
import logoMarvel2 from '../../assets/images/marvel2.png'
import logoMarvel3 from '../../assets/images/marvel3.png'
import logoMarvel4 from '../../assets/images/marvel4.png'
import logoMarvel5 from '../../assets/images/marvel5.png'
import logoMarvel6 from '../../assets/images/marvel6.png'
import { ObtenerComics } from '../../services/api.js'


//import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';
//const handleDragStart = (e) => e.preventDefault();


const logos=[
    <img className="images-slider" src={logoMarvel} alt="logoMarvel" />,
    <img className="images-slider" src={logoMarvel2} alt="logoMarvel" />,
    <img className="images-slider" src={logoMarvel3} alt="logoMarvel" />,
    <img className="images-slider" src={logoMarvel4} alt="logoMarvel" />,
    <img className="images-slider" src={logoMarvel5} alt="logoMarvel" />,
    <img className="images-slider" src={logoMarvel6} alt="logoMarvel" />,
];

function HomePage() {
    
    const [comicData, setComicData]=useState("");
    useEffect( async ()=>{
        
        await axios.request(ObtenerComics()).then(function (response) {
            setComicData(response.data.data.results);
            //console.log(response.data.data.results);

            }).catch(function (error) {
                        console.error(error);
            });
    },[]);

    console.log(comicData)
    const imagess=[]
    const comicsTitles=[]
    for (let i = 0; i < comicData.length; i++) {
        if(comicData[i].images.length!==0){
            imagess.push(comicData[i].images[0].path+'/'+'portrait_uncanny.'+comicData[i].images[0].extension)
            comicsTitles.push(comicData[i].title)
        }
        
      }
    console.log(comicsTitles)



    return (
        <div className="flexing-home">

            <h1 id="title-home">Your favorite marvel comic website </h1>


            <AliceCarousel 
                items={logos} 
                autoPlayInterval={2000}
                autoPlayDirection="rtl"
                autoPlay={true}
                fadeOutAnimation={true}
                mouseTrackingEnabled={true}
                disableAutoPlayOnAction={true}
                buttonsDisabled={false}/>
            
        </div>
    )
}

export default HomePage;


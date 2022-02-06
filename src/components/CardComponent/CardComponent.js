import React from "react";
import './CardComponent.css'

function CardComponent({Objeto}) {
    return (
        <div className="centered">
            <section className="cards">
                <a href={Objeto.url}> 
                    <article className="card">
                        <header className="title-header-comic" >{Objeto.title}</header>
                        <img className="images-slider" src={Objeto.imagen} alt={Objeto.imagen} />
                        {/* <p>Click for web site</p> */}

                    </article>
                    </a>
            </section>
        </div>
    )
}

export default CardComponent;
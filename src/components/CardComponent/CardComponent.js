import React from "react";
import { Link } from "react-router-dom";

import './CardComponent.css'

function CardComponent({ Objeto }) {
    return (
        <div className="centered">
            <section className="cards">
                <article className="card">

                    <header className="title-header-comic" >{Objeto.title}</header>

                    <Link to={`/Details/${Objeto.id}`}>
                        <img className="images-slider" src={Objeto.imagen} alt={Objeto.imagen} />
                    </Link>
 
                </article>
            </section>
        </div>
    )
}

export default CardComponent;
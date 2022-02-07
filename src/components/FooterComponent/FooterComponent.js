import React from "react";
import { FaGithubSquare,FaLinkedin } from "react-icons/fa";

import './FooterComponent.css'

function FooterComponent() {
    return (
        <div className="flexing-footer">
            <p className="texto-footer">Techno Comics</p>

            <div className="texto-footer">
                <a href='https://github.com/dieherro91/comic_app_react'>
                    <FaGithubSquare id="githubs"/>
                </a>
                <a href='https://www.linkedin.com/in/diego-hernando-romero-roa-6744b7195/'>
                    <FaLinkedin id="linkedin"/>
                </a>
            </div>
        </div>
    )
}
export default FooterComponent;
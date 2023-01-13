import React from "react";
import "./NotFound.css"
import { Link } from "react-router-dom";
import error from "../../img/error.jpg"

function NotFound() {
    return (
        <div className="notFound__error">
            <div><img src={error} className="notFound__error--img" alt="error" title="Oops!" /></div>
            <div className="notFound__error--titulo">Hemos tenido un inconveniente</div>
            <div className="notFound__error--subtitulo">Por favor, aguarde unos instantes e intente nuevamente</div>
            <div className="boton card-button">
                <Link className="header__nav--a" to="/"><button className="btn">Volver al inicio</button></Link>
            </div>
        </div>
    )
}

export default NotFound
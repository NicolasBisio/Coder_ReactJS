import React from 'react'
import "./Success.css"
import success from "../../img/success.png"
import { Link } from 'react-router-dom'

const Success = () => {
    return (
        <div className="successCart">
            <div ><img src={success} className="successCart--img" alt="error" title="Ok" /></div>
            <div className="successCart--titulo">El carrito está vacío</div>
            <div className="successCart--subtitulo">Por favor, agregue los productos que desea comprar</div>
            <div className="boton card-button">
                <Link className="header__nav--a" to="/"><button className="btn">Volver al inicio</button></Link>
            </div>
        </div>
    )
}

export default Success
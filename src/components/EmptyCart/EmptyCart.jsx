import React from 'react'
import "./EmptyCart.css"
import emptyCart from "../../img/emptycart.png"
import { Link } from 'react-router-dom'


const EmptyCart = () => {
    return (
        <div className="emptyCart__error">
            <div ><img src={emptyCart} className="emptyCart__error--img" alt="error" title="Oops!" /></div>
            <div className="emptyCart__error--titulo">El carrito está vacío</div>
            <div className="emptyCart__error--subtitulo">Por favor, agregue los productos que desea comprar</div>
            <div className="boton card-button">
                <Link className="header__nav--a" to="/"><button className="btn">Volver al inicio</button></Link>
            </div>
        </div>
    )
}

export default EmptyCart
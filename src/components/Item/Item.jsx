import React from "react";
import "./Item.css"

function Item({product}) {
    return (
            <div className="card">
                <div className="card__imagen"><img src={product.imagen} alt={product.imagen} className="card__imagen" title={product.nombre}/></div>
                <div className="card-name">{product.nombre}</div>
                <div className="card-price">$ {product.precio}</div>
                <div className="boton card-button">
                    <button className="btnAgregar" id={product.nombre} title="Pulsa para agregar al carrito">Ver más</button>
                </div>
            </div>);
}

export default Item
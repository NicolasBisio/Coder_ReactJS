import React from "react";
import "./ItemDetail.css"

function ItemDetail({products}) {
    console.log(products);
    return(
        <div className="card">
            <div className="card__imagen"><img src={products.imagen} alt={products.imagen} className="card__imagen" title={products.nombre} /></div>
            <div className="card-name">{products.nombre}</div>
            <div className="card-price">$ {products.precio}</div>
            <div className="card-detail">{products.detail}</div>
        </div>
    )
}

export default ItemDetail
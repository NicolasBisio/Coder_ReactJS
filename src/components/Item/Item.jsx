import React from "react";
import "./Item.css"
import { useNavigate } from "react-router-dom";

function Item({ product }) {

    const navigate = useNavigate();

    const handleDetail = () => {
        console.log("Detail bla bla");
        navigate(`/detail/${product.id}`)
    }

    return (
        <div  className="card" onClick={handleDetail}>
            <div className="card__imagen"><img src={product.imagen} alt={product.imagen} className="card__imagen" title={product.nombre} /></div>
            <div className="card-name">{product.nombre}</div>
            <div className="card-price">$ {product.precio}</div>
            <div className="boton card-button">
                <button className="btnMas" id={product.nombre} title="Ir al detalle del producto">Ver más</button>
            </div>
        </div>        
        );
}

export default Item
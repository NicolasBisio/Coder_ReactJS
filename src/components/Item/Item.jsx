import React from "react";
import "./Item.css";
import { useNavigate } from "react-router-dom";

function Item({ products }) {

    const navigate = useNavigate();

    const handleDetail = () => {
        navigate(`/detail/${products.id}`)
    }

    return (
        <div className="card" onClick={handleDetail}>
            <div className="card__imagen"><img src={products.imagen} alt={products.imagen} className="card__imagen" title={products.nombre} /></div>
            <div className="card-name">{products.nombre}</div>
            <div className="card-price">$ {products.precio}</div>
            <div className="boton card-button">
                <button className="btnMas" id={products.nombre} title="Ir al detalle del producto">Ver más</button>
            </div>
        </div>
    );
}

export default Item
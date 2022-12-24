import { React, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ products }) {

    const [qtyAdded, setQtyAdded] = useState(1)

    const handleOnAdd = (qty) => {
        setQtyAdded(qty)
    }

    console.log(qtyAdded)

    return (
        <div className="card">
            <div className="card__imagen"><img src={products.imagen} alt={products.imagen} className="card__imagen" title={products.nombre} /></div>
            <div className="card-name">{products.nombre}</div>
            <div className="card-price">$ {products.precio}</div>
            <div className="card-detail">{products.detail}</div>
            <ItemCount onAdd={handleOnAdd} stock={products.stock}/>
        </div>
    )
}

export default ItemDetail
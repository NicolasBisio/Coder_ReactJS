import { React, useContext, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";

function ItemDetail({ products }) {

    const navigate = useNavigate()

    const [qtyAdded, setQtyAdded] = useState(0)

    const {addItem} = useContext(Shop)

    const handleOnAdd = (qty) => {
        setQtyAdded(qty)
    }

    const handleTerminate = () => {
        addItem(products, qtyAdded)
        navigate("/cart")
    }

    console.log(qtyAdded)

    return (
        <div className="card">
            <div className="card__imagen"><img src={products.imagen} alt={products.imagen} className="card__imagen" title={products.nombre} /></div>
            <div className="card-name">{products.nombre}</div>
            <div className="card-price">$ {products.precio}</div>
            <div className="card-detail">{products.detail}</div>
            {!qtyAdded ?
                <ItemCount onAdd={handleOnAdd} stock={products.stock} />
                :
                <button className="btn btn-detail" onClick={handleTerminate}>Terminar Compra</button>
            }
        </div>
    )
}

export default ItemDetail
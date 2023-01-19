import { React, useState } from "react";
import "./ItemCount.css"

function ItemCount({ onAdd, stock }) {
    const [contador, setContador] = useState(1)


    const handleOnAddCounter = () => {
        onAdd(contador)
    }

    const onDecrementHandler = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    const onIncrementHandler = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    return (
        <div className="contador">
            <button className="btn" onClick={onDecrementHandler} title="Restar un elemento">-</button>
            <div>{contador}</div>
            <button className="btn" onClick={onIncrementHandler} title="Sumar un elemento">+</button>
            <button className="btn btn-detail" onClick={handleOnAddCounter} title="Sumar un elemento">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
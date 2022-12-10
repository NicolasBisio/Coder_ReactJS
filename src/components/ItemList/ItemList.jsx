import React from "react";
import Item from "../Item/Item";

function ItemList({products}) {
    return(
        <div className="container">
            {products.map(producto => {
                return <Item product={producto} key={producto.id}/>
            })}
        </div>
    )
}

export default ItemList